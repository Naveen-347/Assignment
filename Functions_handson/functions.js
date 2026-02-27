
function validateLogin(username, password) {
    if (username !== "" && password !== "") {
        return true;
    }
    return false;
}
 
// Example:
console.log(validateLogin("naveen", "12345678"));
 
function calculateSalary(basic, hra, allowance, deductionRate = 10) {
    let gross = basic + hra + allowance;
    let deductions = (gross * deductionRate) / 100;
    let netSalary = gross - deductions;
 
    return {
        gross,
        deductions,
        netSalary
    };
}
 
// Example:
console.log(calculateSalary(30000, 5000, 2000));
 
function calculateCart(...prices) {
    let total = prices.reduce((sum, price) => sum + price, 0);
 
    if (total >= 2000) {
        total -= total * 0.10;  // 10% discount
    }
 
    return total;
}
 
// Example:
console.log(calculateCart(500, 800, 900));
 
function calculateGrade(...marks) {
    let total = marks.reduce((sum, m) => sum + m, 0);
    let average = total / marks.length;
    let grade = "";
 
    if (average >= 75) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 50) grade = "C";
    else grade = "Fail";
 
    return { total, average, grade };
}
 
// Example:
console.log(calculateGrade(80, 70, 90));
 

function calculateBill(items, tax = 5) {
    let subtotal = 0;
 
    items.forEach(item => {
        subtotal += item.price * item.qty;
    });
 
    let taxAmount = (subtotal * tax) / 100;
    let finalAmount = subtotal + taxAmount;
 
    return {
        subtotal,
        taxAmount,
        finalAmount
    };
}
// Example:
console.log(calculateBill([
    { price: 100, qty: 2 },
    { price: 50, qty: 1 }
]));