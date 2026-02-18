// Shopping Cart Program
 
let price = 500;
let quantity = parseInt(prompt("Enter quantity: "));
let total = price * quantity;
 
// Apply discount
if (total >= 2000) {
    total = total - (total * 0.10); // 10% discount
}
 
// Add delivery charge
let deliveryCharge = 0;
 
if (total >= 3000) {
    deliveryCharge = 0;
} else {
    deliveryCharge = 150;
}
 
let finalAmount = total + deliveryCharge;
 
// Print final bill

console.log("Price: ₹" + price);
console.log("Quantity: " + quantity);
console.log("Total after discount: ₹" + total);
console.log("Delivery charge: ₹" + deliveryCharge);
console.log("Final Amount: ₹" + finalAmount);


// Login System
 
let username = prompt("Enter username:");
let password = prompt("Enter password:");
 
let isAdmin = false;
let emailVerified = true; // example
 
if (username !== "" && password !== "" && (isAdmin || emailVerified)) {
    console.log("Access granted! Welcome to dashboard.");
} else {
    console.log("Access denied!");
}



// Calculator Program
 
let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));
let operator = prompt("Enter operator (+, -, *, /): ");
 
let result;
 
if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    result = num1 / num2;
} else {
    result = "Invalid operator";
}
 
console.log("Result: " + result);


