import strawberry
from strawberry.fastapi import GraphQLRouter
from app.mutations.auth_mutations import AuthMutation
from app.mutations.task_mutations import TaskMutation
from fastapi import Request
from strawberry.types import Info
from app.database import sessionLocal
from app.schemas.user_schema import TaskType, UserType
from typing import List
from app.models.task import Task
from app.utils.auth import get_current_user



async def get_context(request:Request):
    return{
        "request":request,
        "db":sessionLocal()
    }

@strawberry.type
class Query:
    @strawberry.field
    def health(self) -> str:
        return 'API running'
    

    @strawberry.field
    def me(self, info:Info)-> UserType:
        db = info.context['db']
        request = info.context['request']
        token = request.headers.get("Authorization", '')
        current_user = get_current_user(token, db)
        return UserType(
            id = current_user.id,
            username= current_user.username,
            email=current_user.email

        )
        
    @strawberry.field
    def my_tasks(self, info:Info)->List[TaskType]:
        db = info.context['db']
        request = info.context['request']
        token = request.headers.get("Authorization", '')
        current_user = get_current_user(token, db)
        tasks = db.query(Task).filter(Task.user_id == current_user.id).all()
        return [
            TaskType(
                id=t.id,
                title=t.title,
                description=t.description,
                is_completed=t.is_completed,
                created_at=t.created_at,
                user_id=t.user_id
            )
            for t in tasks
        ]

    
@strawberry.type
class Mutation(AuthMutation, TaskMutation):
    pass
    

try:
    schema = strawberry.Schema(query=Query, mutation=Mutation)
    graphql_app = GraphQLRouter(schema, context_getter=get_context)
    print("GraphQL Schema created successfully")
except Exception as e:
    print(f" Error creating GraphQL schema: {e}")
    raise