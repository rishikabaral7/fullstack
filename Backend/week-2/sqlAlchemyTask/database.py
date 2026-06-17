from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker


DATABASE_URL = 'postgresql://postgres:rishika@localhost:5432/task'

engine = create_engine(DATABASE_URL, echo=True)

Base = declarative_base()

sessionLocal = sessionmaker(bind=engine)
