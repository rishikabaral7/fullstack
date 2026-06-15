total = 500   

def result(math, science, social, nepali, english):
    marks = math + science + social + nepali + english
    totalPercentage = (marks/total)*100
    return totalPercentage

percentage =  int(result(30, 40, 50, 80, 40))
print(f"Percentage: {percentage}%")

if percentage > 90 and percentage <= 100:
    print("Your grade is A+")

elif percentage > 80 and percentage <= 90:
    print("Your grade is A")

elif percentage >70 and percentage <= 80:
    print("Your grade is B+")

elif percentage >60 and percentage <= 70:
    print("Your grade is B")

else:
    print("You are Failed!")