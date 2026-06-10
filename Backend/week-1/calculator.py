import random
def add(num1, num2):
    return num1 + num2

def sub(num1, num2):
    return num1 - num2
def mul(num1, num2):
    return num1 * num2

def div(num1, num2):
    return num1 / num2

chooseNumber = random.randrange(1,4)
 
rule = print("To do calculation you have to choose the number between 1-4 in which:\n" "1:Addition\n"  "2:Subtraction\n"  "3:Multiplication\n"  "4:Division \n")

number = int(input("Guess the number between 1-4: "))

num1 = int(input("Enter first number:"))
num2 = int(input("Enter second number:"))

if (number == 1):
    print(f"Addition of {num1} and {num2} is ",add(num1, num2))
    
elif(number ==2):
    print(f"Subtraction of {num1} and {num2} is ",sub(num1, num2))
elif(number ==3):
    print(f"Multiplication of {num1} and {num2} is ",mul(num1, num2))
elif(number ==4):
    print(f"Division of {num1} and {num2} is ",div(num1, num2))
else: 
    print("Invalid input")
