
// normal function
function sum(...numbers) {
    let totalSum = 0;
    for (let number of numbers) {
        totalSum += number;
    }
    return totalSum;
}

console.log(sum(12, 13, 14)); 

// arrow function
const add = (...prices) => {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
};

// iife function

function callback(a,b){
    return a+b;
}
function addTwo(base, callback) {
  
    return base + callback(12,13); 
}



console.log(addTwo(30, callback)); // 30 + 25 = 55

console.log(add(12, 13, 14)); // 39
