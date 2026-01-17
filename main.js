//task 1

let arr = [1, 2, 3, 2, 4, 1, 5, 3];
let unique = arr.filter((num, index) => arr.indexOf(num) === index);
console.log(unique);

//task 2 

let ArrOfStrings = ["html", "JavaScript", "css"]
let longestWord = "";

ArrOfStrings.forEach(word => {
    if(word.length > longestWord.length){
        longestWord = word;
    }
})
console.log(longestWord);

//task 3 

sum = 0;

const avg = arr.forEach(num => { num
     sum += num })
     const average = sum / arr.length;
     


     console.log(Math.round(average));
 
//task 4

const startwith = ArrOfStrings.every(word => 
    word[0] === ArrOfStrings[0]
);
console.log(startwith);

//task 5

let NegativeArr = [1,4,5,-2,3,52,-4,5,-9,-1,8,-7,3]

const Negative = NegativeArr.filter(num => num < 0).length;

console.log(Negative);

//task 6

const ArrToString = ArrOfStrings.map(num => String(num));

console.log(ArrToString);

//task 7

const strings = ["hello", "", "world", "", "javascript"];

const cleaned = strings.filter(str => str !== "");

console.log(cleaned);

//task 8

let lowest = arr[0];

const LowNum = arr.forEach(num => {
    if(num < lowest){
        lowest = num;
    }
})

console.log(lowest);

//task 9

const onlynum = ["123", "456", "789"]; 

const check = onlynum.every(str => !isNaN(str));

console.log(check)

//task 10

const numbers = [4, 7, 10, 15, 20, 25];

const step1 = numbers.filter(num => num % 2 === 0);
const step2 = numbers.map(num => num * 3);
const step3 = numbers.some(num => num > 30);

console.log(step1)
console.log(step2)
console.log(step3)






