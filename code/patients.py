from fastapi import FastAPI, HTTPException
from starlette.middleware.cors import CORSMiddleware
from db import db_session
from model import PatientTable, RoomTable

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/patients")  # get list of patients
def read_patients():
    return db_session.query(PatientTable).all()


@app.get("/patient/{patient_id}")  # get a particular patient
def read_patient(patient_id: int):
    patient = db_session.query(PatientTable). \
        filter(PatientTable.id == patient_id).first()
    return patient


@app.post("/patient")  # create a new patient
async def create_patient(id: int, name: str, age: int):
    patient = PatientTable()
    patient.id = id
    patient.name = name
    patient.age = age
    db_session.add(patient)
    db_session.commit()
    return {"Success": True}


@app.delete("/patient/{patient_id}")  # discharge a patient
async def delete_patient(patient_id: int):
    print("PATIENT_ID RECIEVED" + str(patient_id))
    patient = db_session.query(PatientTable). \
        filter(PatientTable.id == patient_id).first()

    print("PATIENT RECIEVED FROM DATABASE" + str(patient))

    if not patient:
        raise HTTPException(status_code=404, detail="Hero not found")

    db_session.delete(patient)
    db_session.commit()
    return {"Success": True}

@app.get("/rooms")  # get list of rooms
def read_rooms():
    return db_session.query(RoomTable).all()

@app.put("/room/{room_id}") # assign patient to room
def assign_patient(patient_id: int, room_id: int):
    room = db_session.query(RoomTable). \
        filter(RoomTable.room_id == room_id).first()

    if not room:
        raise HTTPException(status_code=404, detail="Room not found")

    room.patient_id = patient_id
    room.occupied = True

    db_session.commit()

    return {"Success": True}




