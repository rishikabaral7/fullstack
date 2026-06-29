import strawberry

@strawberry.type
class TaskType:
    id:int
    title:str
    completed:bool