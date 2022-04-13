from fastapi import FastAPI, HTTPException
from starlette.middleware.cors import CORSMiddleware
from db import session, db_session
from model import PatientTable, RoomTable

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/patients")  # get list of patients
def read_patients():
    return session().query(PatientTable).all()


@app.get("/patient/{patient_id}")  # get a particular patient
def read_patient(patient_id: int):
    patient = session.query(PatientTable). \
        filter(PatientTable.id == patient_id).first()
    return patient


@app.post("/patient")  # create a new patient
async def create_patient(id: int, name: str, age: int):
    patient = PatientTable()
    patient.id = id
    patient.name = name
    patient.age = age
    session.add(patient)
    session.commit()
    return {"Success": True}


@app.delete("/patient/{patient_id}")  # discharge a patient
async def delete_patient(patient_id: int):
    patient = session.query(PatientTable). \
        filter(PatientTable.id == patient_id).first()

    if not patient:
        raise HTTPException(status_code=404, detail="Hero not found")

    session.delete(patient)
    session.commit()
    return {"Success": True}

@app.get("/rooms")  # get list of rooms
def read_rooms():
    return session().query(RoomTable).all()

@app.put("/room/{room_id}") # assign patient to room
def assign_patient(patient_id: int, room_id: int):
    room = session.query(RoomTable). \
        filter(RoomTable.room_id == room_id).first()

    if not room:
        raise HTTPException(status_code=404, detail="Hero not found")

    room.patient_id = patient_id
    room.occupied = True

    session.commit()

    return {"Success": True}




