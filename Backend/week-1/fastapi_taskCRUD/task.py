from taskModel import TaskList
from fastapi import FastAPI

app = FastAPI()

tasks = [
    TaskList(id=1, title="learn Python", completed=False )
]

@app.get("/tasks")
def get_all_task():
    return tasks

@app.get("/tasks/{id}")
def get_task_by_id(id:int):
    for task in tasks:
        if task.id == id:
            return task
    
        
@app.post("/tasks")
def add_task(task:TaskList):
    tasks.append(task)
    return tasks

@app.put("/tasks/{id}")
def update_task(id:int, task:TaskList):
    for i in range(len(tasks)):
        if tasks[i].id == id:
            tasks[i] = task
            return task
    

@app.delete("/tasks/{id}")
def delete_task(id:int):
    for i in range(len(tasks)):
        if tasks[i].id == id:
            del tasks[i]
            return{"message": "successfull delete"}

