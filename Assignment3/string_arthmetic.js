console.log("10" + 5); // 105
 
//String with Arithmetic Operators
 
//Exercise2: Guess the output of below code snippets
console.log("10" - 5);//5
console.log("10" * 2);//20
console.log("10" / 2);//5
 
//Exercise 3: Boolean Coercion
console.log(`*****boolean coercion with + operator*****`);
console.log(true + 1);//2
console.log(false + 1);//1
console.log(`*****boolean coercion with + operator equality operator*****`);
//Exercise 4: Equality Operators
console.log(0 == false);//true
console.log(0 === false);//false
 
//Exercise 5: Empty String Comparison
console.log("****Empty String Comparison****")
console.log("" == 0);//true
console.log("" === 0);//false
 
//Exercise 6: Null and Undefined Comparison
console.log("****Null and Undefined Comparison****")
console.log(null == undefined);//true
console.log(null === undefined);//false
 
 
//Exercise 7: Logical AND (&&)
console.log(`Logical AND (&&)`);
console.log("Hello" && 0);//0
console.log(10 && "JS");//JS
 
 
//Exercise 8: Logical OR (||)
console.log(`Logical OR (||)`);
console.log("" || "Default Value");//Default Value
console.log(0 || 100);//100
 
//Exercise 9: If Condition (Truthy / Falsy)
console.log(`If Condition (Truthy / Falsy)`);
let value = "0";
 
if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
// OUTPUT Truty
 
//Exercise 10: User Input Simulation
let age = "18";
 
if (age >= 18) {
  console.log("Allowed");
} else {
  console.log("Not Allowed");
}
// output Allowed 