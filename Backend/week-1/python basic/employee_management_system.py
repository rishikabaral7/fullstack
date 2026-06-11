class Employee:
    def __init__(self,id,name,department,salary):
        self.id = id
        self.name = name
        self.department = department
        self.salary = salary
        
    def display_details(self):
        print(f"\nEmployee Id: {self.id}")
        print(f"Employee Name: {self.name} ")
        print(f"Employee Department:{self.department}")
        print(f"Employee Salary: {self.salary}")
        

class Manager(Employee):
    def __init__(self, id, name,department, salary, team_size):
        super().__init__(id,name, department, salary)
        self.team_size = team_size
        
    def display_details(self):
        super().display_details()
        print(f"Team size: {self.team_size}")

class EmployeeManagement:
    
    def __init__(self):
        self.employees = []
        
    def add_employees(self):
        print("\n 1. Employee")
        print("\n 1. Manager")

        choice = input("Enter employee type:")
        
        id = input("Enter employee ID:")
        name = input("Enter employee name:")
        department = input("Enter employee department:")
        salary = float(input("Enter employee salary:"))

        if choice == "2":
            team_size = input("Enter team size:")

            employee = Manager(id, name, department, salary, team_size)
        else:
            employee = Employee(id, name, department, salary)
        
        self.employees.append(employee)
        print("Employee added successfully")

    def view_employee(self):
            if not self.employees:
                print("No employees found")
                return
            
            print("\n-------Employee list--------")

            for employee in self.employees:
                employee.display_details()
            
    def search_employee(self):
            emp_id = input("Enter employee id to search:")

            for employee in self.employees:
                if employee.id == emp_id:
                    print("\n Employee Found")
                    employee.display_details()  
                    return
            print("Employee not found")
            
    def delete_employee(self):
            emp_id = input("Enter employee id to delete:")

            for employee in self.employees:
                if employee.id == emp_id:
                    self.employees.remove(employee)
                    print("Employee delete successfully")
                    return
            
            print("Employee not found")
            
management = EmployeeManagement()

while True:
                print("\n===== Employee Management System =====")
                print("1. Add Employee")
                print("2. View Employees")
                print("3. Search Employee")
                print("4. Delete Employee")
                print("5. Exit")
                
                choice = input('Enter your choice: ')
                
                if choice == "1":
                    management.add_employees()
                
                elif choice == "2":
                    management.view_employee()
                
                elif choice == "3":
                    management.search_employee()
                
                elif choice == "4":
                    management.delete_employee()
                
                elif choice == "5":
                    print("Exiting...")
                    break

                else:
                    print("Invalid choice")
                

            
    
        
        
        
    