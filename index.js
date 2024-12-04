console.log("Hello from JS Condition");
// Exercise 1
// <h3>Write a  which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>
const giveNumber = 15;

if (typeof giveNumber !== "number") {
    console.log("Nan - Not a Number! Please Input Number");
} else if (giveNumber % 3 == 0 && giveNumber % 5 === 0) {
    console.log("Fizz and Buzz");
} else if (giveNumber % 3 === 0) {
    console.log("Fizz");
} else if (giveNumber % 5 === 0) {
    console.log("Buzz");
} else {
    console.log("given Input Number/Value");
}

// Exercise 2F

// Write a JavaScript conditional statement to find the largest of five numbers.
// check input numbers are the type of number, if not console.log('Invalid inputs

// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

const number1 = -5;
const number2 = -2;
const number3 = -6;
const number4 = 0;
const number5 = -1;

if (
    number1 > number2 &&
    number1 > number3 &&
    number1 > number4 &&
    number1 > number5
) {
    console.log("number1");
} else if (
    number2 > number1 &&
    number2 > number3 &&
    number2 > number4 &&
    number2 > number5
) {
    console.log("number2");
} else if (
    number3 > number1 &&
    number3 > number2 &&
    number3 > number4 &&
    number3 > number5
) {
    console.log("number3");
} else if (
    number4 > number1 &&
    number4 > number2 &&
    number4 > number3 &&
    number4 > number5
) {
    console.log("number4");
} else if (
    number5 > number1 &&
    number5 > number2 &&
    number5 > number3 &&
    number5 > number4
) {
    console.log("number5");
} else {
    console.log("0");
}

// Exercise 3

// Write a JavaScript program that accept two integers and display the larger.

// check input numbers are the type of number, if not console.log('Invalid inputs)

// Sample numbers : 2,5
// Output : 5

const largestNunber1 = 2.5;
const largestNunber2 = 5;

if (largestNunber1 > largestNunber2) {
    console.log(largestNunber1);
} else {
    console.log(largestNunber2);
}

// Exercise 4

// Write a JavaScript conditional statement to find the sign of product of three numbers.
// Display an console.log box with the specified sign.

// Sample numbers : 3, -7, 2
// Output : The sign is -

const one = 3;
const two = -7;
const three = 2;

if (one + two + three > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}

// Exercise 5

// Choose the correct comparison operator to console.log true, when x is greater than y.
// Choose the correct comparison operator to console.log false, when x is equal to y.
// Choose the correct comparison operator to console.log not sure, when x is NOT equal to y.

const x = 3;
const y = 7;

if (x > y) {
    console.log("true");
} else if (x === y) {
    console.log("false");
} else {
    console.log("not sure");
}
// Exercise 6

// The Grade Assigner
// - Write a if/else statement that:
//   - takes 1 variable, a number score.
//   - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that if/else statement for a few different scores and log the result to make sure it works.

const AAA = 30;

if (100 > AAA && AAA < 90) {
    console.log("A");
} else if (90 > AAA && AAA < 80) {
    console.log("B");
} else if (90 > AAA && AAA < 70) {
    console.log("C");
} else if (70 > AAA && AAA < 60) {
    console.log("D");
} else {
    console.log("F");
}

// Exercise 10 j
// Write If statement that takes string
//     if string length is more than 10 print the string  has more than 10 characters
//      if string length is more than 5 return the string has more than 5 characters
//       if string length is less than 1 return the string has nothing
//       if string length is equal to 1 return the string has 1 character

let text = "Hello my name is Davaadalai";

if (10 > text.length) {
    console.log("more than 10");
} else if (5 < text.length) {
    console.log("more than 5");
} else if (1 < text.length) {
    console.log("nothing");
} else if (1 == text.length) {
    console.log("1 character");
}

// Exercise 7 j

//  3) Write conditional expressions to satisfy the following safety rules:

//  a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".

//  b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"

//  c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".

// Write If statement that takes number checks if the number is odd or even

//     if odd return "the number is odd"
//     if even return "the number is even"

// a)
const crewStatus = true;
if (crewStatus === true) {
    console.log("Crew Ready");
} else "Crew Not Ready";

// b)
const computerStatusCode = 500;
if (computerStatusCode == 200) {
    console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode == 400) {
    console.log("Success! Computer online.");
} else "ALERT: Computer offline!";

// c)
const shuttleSpeed = 30000;
if (shuttleSpeed > 17500) {
    console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
    console.log("ALERT: Cannot maintain orbit!");
} else {
    console.log("Stable speed");
}

const checkNumOddOrEven = 77;
if (checkNumOddOrEven % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Exercise 8 j

// Write if statement that takes role and return each role with greeting

//     if role is 'Employee' return 'Hello'
//     if role is 'Director' return 'Greetings'
//     if role is '' return 'Please provide role'
//     else return 'Hi'

const role = "Employee";

if (role === "Employee") {
    console.log("Hello");
} else if (role === "Director") {
    console.log("Greetings");
} else if (role === "") {
    console.log("Please provide role");
} else {
    console.log("Hi");
}

// Exercise 8 j

// 0. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг,
// бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу.
// Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.

const price2 = 3000;
const price3 = 27500;
const price1 = 100000;

if (price1 >= 5000 && price1 <= 30000) {
    console.log((price1 * 15) / 100);
}
else {
    console.log((price1 * 20) / 100);
}

// 1
 
//Write a JavaScript program that checks if a given number is positive, negative, or zero.
// Sample Input: let number = -5;
// Sample Output: "-5 is negative"

 
// 2
 
// Write a JavaScript program to check if a given temperature in Celsius is
//  considered freezing (below 0), normal (0-30), or hot (above 30).
// Sample Input: let temperature = 15;
// Sample Output: "15°C is normal"
 
// 3
 
// Write a JavaScript program to determine whether a given character is a vowel or a consonant.
// Sample Input: let char = 'a';
// Sample Output: "a is a vowel"
 
// 4
 
// Write a JavaScript program to calculate the grade based on a given score:
 
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: Below 60
 
// Sample Input: let score = 85;
// Sample Output: "Your grade is B"
 
let scoreB = 65

if (100 <= scoreB && scoreB >= 90){
    console.log('Your grade is A')
}
else if (89 <= scoreB && scoreB >= 80){
    console.log('Your grade is B')
}
else if (79 <= scoreB && scoreB >= 70){
    console.log('Your grade is C')
}
else if (69 <= scoreB && scoreB >= 60){
    console.log('Your grade is D')
}
else {
    console.log('Your grade is F')
}

// 5
 
// Write a JavaScript program to determine if a person is an adult, teenager, or child based on their age.
 
// Child: Below 13
// Teenager: 13-19
// Adult: 20 and above
 
// Sample Input: let age = 16;
// Sample Output: "You are a teenager"
 
// 6
 
// Write a JavaScript program to check if a given number is divisible by 5 or 7.
// Sample Input: let number = 35;
// Sample Output: "35 is divisible by both 5 and 7"
 
// 7
 
// Write a JavaScript program to determine whether
//  the given time is in the morning (0-11), afternoon (12-17), or evening (18-23).
// Sample Input: let hour = 14;
// Sample Output: "It's afternoon"
 
// 8
 
// Write a JavaScript program to check if a number is a single-digit, double-digit, or triple-digit number.
// Sample Input: let number = 25;
// Sample Output: "25 is a double-digit number"
 
// 9
 
// Write a JavaScript program to determine whether a number is a multiple of 4.
// Sample Input: let number = 16;
// Sample Output: "16 is a multiple of 4"
 
// 10
 
// Write a JavaScript program to check if a given character is uppercase or lowercase.
// Sample Input: let char = 'G';
// Sample Output: "G is uppercase"
 
// 11
 
// Write a JavaScript program to determine if a given day number corresponds to a weekday or a weekend (1 = Monday, ..., 7 = Sunday).
// Sample Input: let day = 6;
// Sample Output: "It's a weekend"
 
// 12
 
// You’re designing a coffee shop menu. Write a program to determine the price of a coffee based on size:
 
// Small: $2
// Medium: $3
// Large: $4
 
// Sample Input: let size = 'Medium';
// Sample Output: "A Medium coffee costs $3"
 
// 13
 
// You’re writing a program for a weather app.
// Display whether a person should take an umbrella, a jacket, or sunglasses based on the weather condition (Rainy, Cold, Sunny).
// Sample Input: let weather = 'Rainy';
// Sample Output: "Don't forget your umbrella!"
 
// 14
 
// You are creating a program for a theater. Based on a person's age, determine their ticket price:
 
// Below 5: Free
// 5 to 18: $10
// 19 to 60: $15
// Above 60: $12
 
// Sample Input: let age = 70;
// Sample Output: "Your ticket price is $12"
 
// 15
 
// You’re designing a program for a virtual pet. Determine if the pet is Happy, Hungry, or Sleepy based on its energy level:
 
// Energy > 70: Happy
// Energy between 30 and 70: Hungry
// Energy < 30: Sleepy
 
// Sample Input: let energy = 25;
// Sample Output: "Your pet is Sleepy"
 
// 16
 
// You’re developing a weightlifting app. Based on the weight lifted, classify the attempt as Beginner, Intermediate, or Advanced:
 
// Weight < 50 kg: Beginner
// 50-100 kg: Intermediate
// Weight > 100 kg: Advanced
 
// Sample Input: let weight = 75;
// Sample Output: "You are lifting at an Intermediate level"
 
// 17
 
// Create a discount program for a clothing store. The discount depends on the total amount spent:
 
// Spend < $50: No discount
// Spend $50-$100: 10% discount
// Spend $101-$200: 20% discount
// Spend > $200: 30% discount
 
// Sample Input: let totalSpent = 150;
// Sample Output: "You get a 20% discount"
 
// 18
 
// Write a program to determine if a password is strong, medium, or weak.
 
// Strong: At least 8 characters, includes numbers and special characters
// Medium: At least 6 characters, includes either numbers or special characters
// Weak: Less than 6 characters
 
// Sample Input: let password = 'Pass123!';
// Sample Output: "Your password is strong"
 
// 19
 
// You’re coding a program for an amusement park. Ticket prices vary by age and height:
 
// Children under 120 cm: $5
// Adults 120 cm or taller and aged under 60: $10
// Seniors aged 60 and above: $7
 
// Sample Input: let age = 65, height = 130;
// Sample Output: "Your ticket price is $7"
 
// 20
 
// Write a program for a mobile data plan. Determine the cost based on data usage:
 
// 0-5 GB: $10
// 5-20 GB: $20
// 20-50 GB: $30
// More than 50 GB: $50
 
// Sample Input: let dataUsage = 25;
// Sample Output: "Your data cost is $30"
 
// 21
 
// Write a program for a bank loan eligibility check. A user qualifies if:
 
// They are at least 21 years old
// Their annual income is greater than $25,000
// They do not have a poor credit score (creditScore > 600)
 
// Sample Input: let age = 30, income = 30000, creditScore = 650;
// Sample Output: "You are eligible for the loan"
 
// 22
 
// Write a program for an online grading system where the final grade depends on a combination of attendance and exam scores:
 
// If attendance is below 75%, the grade is automatically "F".
// Otherwise, calculate the average score of three exams:
// Average >= 90: A
// Average >= 80: B
// Average >= 70: C
// Average >= 60: D
// Below 60: F
 
// Sample Input: let attendance = 80; let exam1 = 85
// Sample Output: "Your final grade is B"
 
// 23
 
// Write a program to calculate the total salary for a company employee, including bonuses:
 
// Base salary is $2000.
// Add $500 if the employee has worked for more than 5 years.
// Add $300 if they achieved the monthly target.
// Add $100 if their attendance is above 90%.
 
// Sample Input:
// let yearsWorked = 6;
// const metTarget = true
// const attendance = 95;
// Sample Output: "Your total salary is $2900"
 
// 24
 
// Create a program to determine a runner’s performance in a marathon based on time and gender:
 
// For men:
// Elite: Under 2:10:00
// Advanced: Under 3:00:00
// Amateur: Over 3:00:00
// For women:
// Elite: Under 2:30:00
// Advanced: Under 3:15:00
// Amateur: Over 3:15:00
 
// Sample Input:
// let gender = 'Female';
// const time = '2:45:00';
// Sample Output: "Your performance level is Advanced"