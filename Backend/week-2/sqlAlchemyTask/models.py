from sqlalchemy import Integer, String, Column, Boolean
from database import Base

class Task(Base):
    __tablename__ = 'task'
    
    id = Column(Integer, primary_key=True)
    title = Column(String(255),nullable=False )
    completed = Column(Boolean, default=False)
    
    
    def __repr__(self):
        return f"<Task(id='{self.id}', title='{self.title}', completed='{self.completed}')>"