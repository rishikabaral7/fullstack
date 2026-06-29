from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = 'postgresql://postgres:rishika@localhost:5432/crud_task_db'

engine = create_engine(DATABASE_URL,echo=True)

Base = declarative_base()

sessionLocal = sessionmaker(autocommit=False,
    autoflush=False, bind=engine)


