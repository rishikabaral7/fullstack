from fastapi import FastAPI
import strawberry
from strawberry.fastapi import GraphQLRouter

@strawberry.type
class User:
    id:int
    title:str
    completed: bool
    
db_users=[
    User(id=1, title="Learning FastAPI", completed=False),
    User(id=2, title="Learning React", completed=True)
]

def fetch_users():
    return db_users

@strawberry.type
class Query:
    get_Users: list[User] = strawberry.field(resolver=fetch_users)

    @strawberry.field
    def get_user_by_id(self, userID:int)-> User |None:
        for user in db_users:
            if user.id == userID:
                return user
        return None
    
@strawberry.type
class Mutation:
    @strawberry.field
    def create_user(self, title:str, completed:bool)-> User:
        new_id = len(db_users)+1
        new_user = User(id=new_id, title=title, completed=completed)
        db_users.append(new_user)
        return new_user
    
    @strawberry.field
    def delete_user(self, userId:int)->User |None:
        for user in db_users:
            if user.id == userId:
                db_users.remove(user)
                return user
        return None
    
    @strawberry.field
    def update_user(self, userID:int, title:str, completed:bool)->User |None:
        for user in db_users:
            if user.id == userID:
                user.title = title
                user.completed = completed
                return user
        return None     
    
    
schema = strawberry.Schema(query=Query, mutation = Mutation)
graphql_app = GraphQLRouter(schema) 

app = FastAPI()
app.include_router(graphql_app, prefix = "/graphql")