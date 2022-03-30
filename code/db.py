
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, scoped_session

user_name = "user"
password = "password"
host = "db"
database_name = "sample_db"

DATABASE = 'mysql://%s:%s@%s/%s?charset=utf8' % (
    user_name,
    password,
    host,
    database_name,
)

ENGINE = create_engine(
    DATABASE,
    encoding="utf-8",
    echo=True
)

session = scoped_session(
    sessionmaker(
        autocommit=False,
        autoflush=False,
        bind=ENGINE
    )
)

Base = declarative_base()
Base.query = session.query_property()

db_session = session()


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