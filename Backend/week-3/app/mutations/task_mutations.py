import strawberry
from app.models.task import Task
from app.schemas.user_schema import TaskResponse, TaskType, CreateTaskInput, updateTaskInput
from app.utils.auth import get_current_user
from strawberry.types import Info

@strawberry.type
class TaskMutation:
    @strawberry.mutation
    def create_task(self, input:CreateTaskInput, info:Info)->TaskResponse:
        db = info.context['db']
        request = info.context['request']
        
        try:
            token = request.headers.get("Authorization", '')
            current_user = get_current_user(token, db)
            
            new_task = Task(title=input.title, description= input.description, user_id = current_user.id)
            db.add(new_task)
            db.commit()
            db.refresh(new_task)
            
            return TaskResponse(
                success=True,
                message="Task created",
                task= Task(id=new_task.id,
                    title=new_task.title,
                    description=new_task.description,
                    is_completed=new_task.is_completed,
                    created_at=new_task.created_at,
                    user_id=new_task.user_id
                )
            )
        except Exception as e:
            return TaskResponse(success=False, message=str(e))
    
    @strawberry.mutation
    def update_task(self, input:updateTaskInput, info:Info)->TaskResponse:
        db = info.context['db']        
        request = info.context['request']
        
        try:
            token = request.headers.get("Authorization", '')
            current_user = get_current_user(token, db)
            task = db.query(Task).filter(Task.id == input.task_id, Task.user_id == current_user.id).first() 
            if not task:
                return TaskResponse(success=False, message="Task not found or not yours.")
            
            if input.title is not None:
                task.title =input.title
            if input.description is not None:
                task.description = input.description
            if input.is_completed is not None:
                task.is_completed = input.is_completed
                
            db.commit()
            db.refresh(task)
            
            return TaskResponse(
                success=True,
                message="Task updated!",
                task=TaskType(
                    id=task.id,
                    title=task.title,
                    description=task.description,
                    is_completed=task.is_completed,
                    created_at=task.created_at,
                    user_id=task.user_id
                )
                
            )
        except Exception as e:
            return TaskResponse(success=False, message=str(e))
    
    @strawberry.mutation
    def delete_task(self, task_id:int, info:Info) -> TaskResponse:
        db = info.context['db']
        request = info.context['request']
        
        try:
            
            token = request.headers.get("Authorization", '')
            current_user = get_current_user(token, db)
            
            task = db.query(Task).filter(Task.id == task_id, Task.user_id == current_user.id).first()
            if not task:
                return TaskResponse(success=False, message="Task not found or not yours.")
            db.delete(task)
            db.commit()
            return TaskResponse(success=True, message="Task deleted successfully.")
        except Exception as e:
            return TaskResponse(success=False, message=str(e))


        
        
            
                    
            
            
            