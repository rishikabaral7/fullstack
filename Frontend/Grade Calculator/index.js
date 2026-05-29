let totalPoints = 500;
let math = 20;
let science = 40;
let nepali = 44;
let english = 68;
let social = 93;

let sum = math + science + nepali + english + social;

let gradePercentage = (sum / totalPoints) * 100;

console.log("Grade Percentage=", gradePercentage);

if (gradePercentage >= 90 && gradePercentage <= 100) {
  console.log("Your grade is A");
} else if (gradePercentage >= 80 && gradePercentage < 90) {
  console.log("Your grade is B");
} else if (gradePercentage >= 70 && gradePercentage < 80) {
  console.log("Your grade is C");
} else if (gradePercentage >= 60 && gradePercentage < 70) {
  console.log("Your grade is D");
} else if (gradePercentage >= 50 && gradePercentage < 60) {
  console.log("Your grade is E");
} else console.log("Failed");
