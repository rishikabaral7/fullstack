
import random

givenNumber = random.randrange(1,100)


while True:
    
    guessNumber = int(input("Guess the number between 1 to 100: "))

    if guessNumber > givenNumber:
       print("Too high, guess lower number")

    elif guessNumber < givenNumber:
        print("too low, guess higher number")

    else:
        print("You have guess the correct number")
        break