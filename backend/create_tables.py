from database import engine, Base
from models import Resume

Base.metadata.create_all(bind=engine)
print("✅ Table created successfully!")
