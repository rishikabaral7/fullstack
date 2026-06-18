import strawberry
from database import sessionLocal
from models import Task
from schema import TaskType

@strawberry.type
class Query:
    
    @strawberry.field
    def get_tasks(self)->list[TaskType]:
        session = sessionLocal()
        tasks = session.query(Task).all()
        return [
            TaskType(
                id=t.id,
                title=t.title,
                completed=t.completed
            )
            for t in tasks
        ]
            
        
    