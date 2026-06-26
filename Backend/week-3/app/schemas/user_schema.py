import strawberry
from typing import Optional
from datetime import datetime 

@strawberry.type
class UserType:
    id:int
    username:str
    email:str
    
@strawberry.type
class AuthResponse:
    success:bool
    message:str
    user:Optional[UserType] =None
    token:Optional[str] = None
    
@strawberry.input
class RegisterInput:
    username:str
    email:str
    password:str
    
@strawberry.input
class LoginInput:
    email: str
    password: str

@strawberry.type
class TaskType:
    id : int
    title: str
    description: Optional[str]
    is_completed:bool
    created_at: datetime
    user_id: int
    
@strawberry.type    
class TaskResponse:
    success: bool
    message: str
    task: Optional[TaskType] =None
    
@strawberry.input
class CreateTaskInput:
    title: str
    description: Optional[str]=None
    
@strawberry.input
class updateTaskInput:
    task_id: int
    title: str
    description: Optional[str]=None
    is_completed: Optional[bool]=None

    
    
    
    
    