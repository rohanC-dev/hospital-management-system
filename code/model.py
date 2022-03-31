from sqlalchemy import Column, Integer, String, Boolean
from db import Base
from db import ENGINE


class PatientTable(Base):
    __tablename__ = 'patient'
    id = Column(Integer, primary_key=True)
    name = Column(String(30), nullable=False)
    age = Column(Integer)


class RoomTable(Base):
    __tablename__ = 'room'
    room_id = Column(Integer, primary_key=True)
    patient_id = Column(Integer)
    occupied = Column(Boolean)

class SymptomTable(Base):
    __tablename__ = 'symptom'
    patient_id = Column(Integer, primary_key=True)
    symptom = Column(String)


def main():
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    main()

"""from typing import Optional

from sqlmodel import Field, SQLModel, create_engine


class Patient(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    age: int


user_name = "user"
password = "password"
host = "db"
database_name = "sample_db"

DATABASE_URL = 'mysql://%s:%s@%s/%s?charset=utf8' % (user_name, password, host, database_name)

engine = create_engine(DATABASE_URL, encoding="utf-8", echo=True)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


if __name__ == "__main__":
    create_db_and_tables()"""
