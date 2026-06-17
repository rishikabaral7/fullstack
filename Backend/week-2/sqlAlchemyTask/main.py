from database import sessionLocal, Base, engine
from models import Task

def run_app():
    Base.metadata.create_all(engine)

    session = sessionLocal()
    
    try:
        task2 = Task(
            title = 'Learning python',
            completed = True
        )
        
        session.add(task2)
        session.commit()
        
        # deleteTask = session.get(Task, 2)
        # if deleteTask:
        #     session.delete(deleteTask)
        #     session.commit()
        #     print("Task delete successfullyy")
        # else: 
        #     print("Task not found")
        print(f"Added new task: {task2}")
        
    except Exception as e:
        print(f"An error occured: {e}")
        session.rollback()
    
    finally:
        session.close()
        
if __name__ == "__main__":
    run_app()