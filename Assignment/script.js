//muitple line comment
/* 
  Extensiooms
  ESLint
  Prettier
  Live Server
  ES6
*/

//Declaring variables using var, let, const
var userAge = 25;
let city = "Proddutur";
const country = "India";

// Reassigning let variable
city = "Banglore"; // valid

// Trying to reassign const (will give error if uncommented)
// country = "USA";  Not allowed

// 4. Functional scope example
function FunctionScope() {
    var x = 40;  // functional scope
    console.log("Inside function x =", x);
}
FunctionScope();

// console.log(x); Error: x is not defined (because of functional scope)

// 5. Block scope example
{
    let y = 50;  // block scoped
    console.log("Inside block y =", y);
}
// console.log(y); Error: y is not defined

// 6. Trying different identifier names
let validName = 10;      // valid
let _name = 20;          // valid
// let 1name = 30;        invalid
// let first-name = 40;   invalid
// let $-name="naveen";  invalid


// Button alert
function showAlert() {

    let userName = document.getElementById("username").value;
    let userPassword = document.getElementById("password").value;
    document.getElementById("display").innerText=`Username: ${userName}, Password: ${userPassword}`;
    alert("Button clicked!");
}