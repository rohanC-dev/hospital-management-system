from fastapi import FastAPI, HTTPException
from starlette.middleware.cors import CORSMiddleware
from db import db_session
from model import SymptomTable

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/symptoms") # get all symptoms
async def read_symptoms():
    return db_session.query(SymptomTable).all()


@app.post("/symptoms")  # create a new symptom
async def create_symptom(patient_id: int, symptom: str):
    symptom_record = SymptomTable()
    symptom_record.patient_id = patient_id
    symptom_record.symptom = symptom
    db_session.add(symptom_record)
    db_session.commit()
    return {"Success": True}