from database import engine, Base
from fastapi.middleware.cors import CORSMiddleware
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

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

app.include_router(
    graphql_app,
    prefix='/graphql'
)

