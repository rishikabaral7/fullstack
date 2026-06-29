import strawberry
from database import sessionLocal
from models import Task
from schema import TaskType

@strawberry.type
class Mutation:
    @strawberry.field
    def create_user(self, title: str) -> TaskType:
        session = sessionLocal()
        try:
            task = Task(title=title)
            session.add(task)
            session.commit()
            session.refresh(task)

            return TaskType(
                id=task.id,
                title=task.title,
                completed=task.completed
            )
        finally:
            session.close()


    @strawberry.field
    def update_user(self, id: int, title: str) -> TaskType:
        session = sessionLocal()
        try:
            task = session.query(Task).filter(Task.id == id).first()

            if not task:
                return None

            task.title = title
            session.commit()
            session.refresh(task)

            return TaskType(
                id=task.id,
                title=task.title,
                completed=task.completed
            )
        finally:
            session.close()


    @strawberry.field
    def delete_user(self, id: int) -> str:
        session = sessionLocal()
        try:
            task = session.query(Task).filter(Task.id == id).first()

            if not task:
                return "Task not found"

            session.delete(task)
            session.commit()

            return "Task deleted successfully"
        finally:
            session.close()