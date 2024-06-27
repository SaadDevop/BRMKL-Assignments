function canVote(age) {
    if (age >= 18) {
        return "You are eligible to vote";
    } else {
        return "You are not eligible to vote";
    }
}

console.log(canVote(16));
console.log(canVote(19));

function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return `${number} is even.`;
    } else {
        return `${number} is odd.`;
    }
}
console.log(isEvenOrOdd(10));
console.log(isEvenOrOdd(13));

function maxOfTwo(num1, num2) {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(maxOfTwo(25, 30));
console.log(maxOfTwo(20, 35));
console.log(maxOfTwo(10, 10));

function greet(name) {
    return 'Hello, ${name}! Welcome to Rawalpindi.';
}

console.log(greet("Sir Zahoor"));



let patient = {
    name: "Tahir",
    age: 30,
    gender: "Male", 
    disease: "TVCAD",
    operation: "CABG", 
}

console.log(patient.name);
console.log(patient.age);
console.log(patient.gender);
console.log(patient.disease);
console.log(patient.operation);

let student = {
    firstname: "Saad",
    lastname: "Sultan",
    age: 32,
    gender: "Male",
    subject: "Web Development",
    city: "Rawalpindi"
}

console.log(student.firstname);
console.log(student.lastname);
console.log(student.age);
console.log(student.gender);
console.log(student.subject);
console.log(student.city);