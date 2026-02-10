from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# CHANGE password and db name
DATABASE_URL = "postgresql://postgres:sakshi365@localhost:5432/resume_db"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()   # VERY IMPORTANT
