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

if (one+two+three>0) {
    console.log("Positive");
} else {
    console.log("Negative")
}

// Exercise 5

// Choose the correct comparison operator to console.log true, when x is greater than y.
// Choose the correct comparison operator to console.log false, when x is equal to y.
// Choose the correct comparison operator to console.log not sure, when x is NOT equal to y.

const x = 3
const y = 7

if (x>y){
    console.log("true");
} else if (x===y){
    console.log("false");
} else {
    console.log ("not sure")
}
// Exercise 6

// The Grade Assigner
// - Write a if/else statement that:
//   - takes 1 variable, a number score.
//   - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that if/else statement for a few different scores and log the result to make sure it works.

const AAA = 30

if (100>AAA && AAA<90){
    console.log("A")
} else if (90>AAA && AAA<80){
    console.log("B")
} else if (90>AAA && AAA<70){
    console.log("C")
} else if (70>AAA && AAA<60){
    console.log("D")
} else {
    console.log ("F")
}

// Exercise 10 j
// Write If statement that takes string
//     if string length is more than 10 print the string  has more than 10 characters
//      if string length is more than 5 return the string has more than 5 characters
//       if string length is less than 1 return the string has nothing
//       if string length is equal to 1 return the string has 1 character

let text = "Hello my name is Davaadalai"

if (10> text.length) {
    console.log("more   than tyest");
    
} else if (5>)

// Exercise 7 j

//  3) Write conditional expressions to satisfy the following safety rules:

//  a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".

//  b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"

//  c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".

// Write If statement that takes number checks if the number is odd or even

//     if odd return "the number is odd"
//     if even return "the number is even"

// Exercise 8 j

// Write if statement that takes role and return each role with greeting

//     if role is 'Employee' return 'Hello'
//     if role is 'Director' return 'Greetings'
//     if role is '' return 'Please provide role'
//     else return 'Hi'

// Exercise 8 j

// 0. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг,
// бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу.
// Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.
