from fastapi import FastAPI, HTTPException
from starlette.middleware.cors import CORSMiddleware
from db import session, db_session
from model import OperatingRoomTable

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/status")  # get status of operating room
async def get_status():
    return session().query(OperatingRoomTable).all()


@app.put("/assign_patient")  # assign a patient to operating room
async def assign_patient(patient_id: int):
    operating_room = session.query(OperatingRoomTable).first()

    if not operating_room:
        raise HTTPException(status_code=404, detail="Room not found")

    if operating_room.occupied:
        return {"Success": False, "message": "Room is occupied"}
    else:
        operating_room.patient_id = patient_id
        operating_room.occupied = True

    session.commit()

    return {"Success": True}


@app.put("/discharge_patient")  # discharge patient
async def discharge_patient():
    operating_room = session.query(OperatingRoomTable).first()

    if not operating_room:
        raise HTTPException(status_code=404, detail="Room not found")

    operating_room.patient_id = None
    operating_room.occupied = False

    session.commit()

    return {"Success": True}
