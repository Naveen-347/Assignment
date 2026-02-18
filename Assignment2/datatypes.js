
//primitive types

const fullName = "Naveen Reddy";
const age = 22;
const height = 5.11;
const booleanType = true;
const bigNumber = 123456789012345678901234567890n;

// Print primitive values and their types
console.log("name:",fullName,"type:",typeof fullName);
console.log("age:",age,"type" ,typeof age);
console.log("height:",height,"type",typeof height);
console.log("boolean:",booleanType,"type",typeof booleanType);
console.log("bigNumber",bigNumber,"Type",typeof bigNumber);


// Create array of values

const valuesArray = [12,14,16,18,20];
console.log("valuesArray:", valuesArray);


// object with properties

const person = {
  firstName: "Naveen",
  lastName: "Reddy",
  role: "Graduate Engineer Trainee",
  location: "Bengaluru",
  yearsOfExperience: 0,
  isTrainee: true
};

console.log("person:", person);
console.log("typeof person:", typeof person); 
console.log("FirstName :",person.firstName);// other way of accessing the excat propertries from the object.  


const yourName = "Pasupula Naveen Reddy";
const yourAge = 23; 
const isTrainee = true;
const favoriteLanguages = ["JavaScript", "TypeScript", "Python", "C++"];


console.log("yourName:", yourName, "typeof:", typeof yourName);
console.log("yourAge:", yourAge, "typeof:", typeof yourAge);
console.log("isTrainee:", isTrainee, "typeof:", typeof isTrainee);
console.log("favoriteLanguages:", favoriteLanguages, " typeof:", typeof favoriteLanguages );

// 4) Write a function helloWorld and print the type of the function

function helloWorld() {
  return "Hello, World!";
}

console.log("calling function", helloWorld());
console.log("typeof helloWorld:", typeof helloWorld); 
 
// Parameterized function 
function even(num){
    if(num%2==0){
        return "even";
    }
    return "odd";
} 

console.log("calling even() with 12:",even(12));
console.log("calling even() with 11:",even(11));



// Print the type of each given value
//"React", 25, 560.0000000, true, {}, [], function() {}


console.log('"React" ->', typeof "React");                 
console.log("25 ->", typeof 25);                           
console.log("560.0000000 ->", typeof 560.0000000); //not float it is a number;        
console.log("true ->", typeof true);                       
console.log("{} ->", typeof {});                           
console.log("[] ->", typeof []);                           
console.log("Array.isArray([]) ->", Array.isArray([]));    // true (to detect arrays)
console.log("function() {} ->", typeof function () {});    