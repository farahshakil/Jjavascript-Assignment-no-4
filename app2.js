//Qno 1
// function date23() {
//     var date = new Date();
//     document.write(date)
    
// } 
//   date23();

//Qno 02
// var firstName = prompt("Enter your first name:");
//  var lastName = prompt("Enter your last name:");
//  function name() {
//  var fullName = firstName + " " + lastName;

// alert("Hi, " + fullName + "!");
    
// }
// name();

//Qno 03

// function number() {
//     var num1 =  parseFloat(prompt("enter first number"));
//     var num2 = parseFloat(prompt("enter second number"));
//     var sum = num1 + num2
//     return sum;
// }
//   var result = number();
//   alert("The sum of the two numbers is: " + result);

//Qno 04
// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     if (b === 0) {
//         return "Error: Division by zero";
//     }
//     return a / b;
// }
// function calculate() {
//     var num1 = parseFloat(prompt("Enter the first number:"));
//     var num2 = parseFloat(prompt("Enter the second number:"));
//     var operator = prompt("Enter the operater (+, -, *, /):");

//     var result;

//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             result = "Error: Invalid operater";        
//     }
//     alert("The result is: " + result);
// }
// calculate();
//  function square(x) {
//     return x * x;
// }
// var result = square(4);
// console.log(result);
    



// //Qno 05
// function square(x) {
//     return x * x;
// }
//  var  result = square(4);
//  console.log(result);
 

// //Qno 06
// function numberOfFactorial() {
//     var num = prompt("enter a positive number")
//     console.log("the factor of num ${num} is:");
//     for (var i =1; i <= num; i++){
//         if(num % i == 0 ){
//             console.log(i);
            
//         }

             
//     }
    
// }
// numberOfFactorial();


// //Qno 07
// function displayCounting() {
//     var start = parseInt(document.getElementById("start").value, 10);
//     var end = parseInt(document.getElementById("end").value, 10);
//     var result = '';

//     if (!isNaN(start) && !isNaN(end) && start <= end) {
//         for (let i = start; i <= end; i++) {
//             result += i + '<br>';
//         }
//     } else {
//         result = 'Please enter valid start and end numbers where start is less than or equal to end.';
//     }


//     document.getElementById("countingResult").innerHTML = result;
// }

// //Qno 08
// function calculateHypotenuse() {
    
//     var base = parseFloat(document.getElementById("base").value);
//     var perpendicular = parseFloat(document.getElementById("perpendicular").value);

  
//     function calculateSquare(value) {
//         return value * value;
//     }

    
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
//     var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
//     document.getElementById("result").innerText = `The hypotenuse is: ${hypotenuse.toFixed(2)}`;
//         }

////Qno 09

// function calculatearea(width,height) {
//     return width * height
// }
// var result = calculatearea(4, 3);
// console.log(result);
//   2nd option
// function calculatearea(width,height) {
//     var width = 6;
//     var height = 5;
//     var area = 6 * 5;
//     console.log(area);
    
// }
// calculatearea()
// Qn0 10

// function check() {
//     var word = prompt("enter palindrome word")
//     var palindrome = "sara"
    
//     if (word === palindrome) {
//         console.log("right answer");
        
        
//     } else {
//         console.log("wrong answer");
        
        
//     }
    
// }
// check()
// Qno 11

// function capitalizeFirstLetterOfEachWord(str) {
    
//     var words = str.split(' ');

//     // 
//     var capitalizedWords = words.map(word => {
        
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });

    
//     return capitalizedWords.join(' ');
// }

// var inputString = "Pass width and height in following manner:.";
// var capitalizedString = capitalizeFirstLetterOfEachWord(inputString);
// console.log(capitalizedString); 
// Qno 12

// function LongestWord(str) {
//     // Split the string into an array of words
//     var words = str.split(' ');
//     var longestWord1 = '';
//     for (var word of words) {

//         if (word.length > longestWord1.length) {
//             longestWord1 = word;
//         }
//     }
     
//      return longestWord1;
// }
// var a = LongestWord('Splitting the input string into an array of words.');
// console.log(a); 
// Qno 13

// function countOccurrences(str, letter) {
//     // Initialize a counter to keep track of the occurrences
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
    
//         if (str[i] === letter) {
//             count++;
//         }
//     }

//     return count
// }

// var result = countOccurrences('JavaScript function that accepts two arguments, a string and a letter and the function','i');
// console.log(result); 
// Qno 14

// CircumferenceOfCircle
// function CircumferenceOfCircle() {
//     var r = 2;
//      var π = 3.14;
//      return 2*π*r;
// }
// var a = CircumferenceOfCircle();
// console.log(a);

// Area of circle

// function areaOfCircle() {

//     var r = 4;
//     var  π = 3.14;
//     return π*r*r;
    
// }

// var a = areaOfCircle();
// console.log(a);






