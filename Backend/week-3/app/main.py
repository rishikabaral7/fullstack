from fastapi import FastAPI
from app.graphql_app import graphql_app
from app.database import engine, Base
from app.models import user, task
Base.metadata.create_all(engine)

app = FastAPI(title="Auth API")

try:
    app.include_router(graphql_app, prefix="/graphql")
    print("GraphQL mounted at /graphql")
except Exception as e:
    print(f" Error mounting GraphQL: {e}")
    raise

@app.get("/")
def root():
    return {"message": "Go to /graphql for the GraphQL playground"}
