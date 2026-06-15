from pydantic import BaseModel

class TaskList(BaseModel):
    id: int
    title: str
    completed: bool = False
    