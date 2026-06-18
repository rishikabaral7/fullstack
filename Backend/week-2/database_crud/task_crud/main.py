from database import engine, Base
from models import Task
from fastapi import FastAPI
import strawberry
from strawberry.fastapi import GraphQLRouter
from resolver.mutation import Mutation
from resolver.query import Query


Base.metadata.create_all(bind=engine)

schema = strawberry.Schema(query=Query, mutation=Mutation)
graphql_app = GraphQLRouter(schema)
app = FastAPI()
app.include_router(
    graphql_app,
    prefix='/graphql'
)

