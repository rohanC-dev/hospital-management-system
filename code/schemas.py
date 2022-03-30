from pydantic import BaseModel


class Patient(BaseModel):
    id: int
    name: str
    age: int
