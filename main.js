//task 1

let arr = [1, 2, 3, 2, 4, 1, 5, 3];
let unique = arr.filter((num, index) => arr.indexOf(num) === index);
console.log(unique);

//task 2 

let ArrOfStrings = ["html", "JavaScript", "css"];
let longestWord = ""

ArrOfStrings.forEach(word => {
    if(word.length > longestWord.length){
        longestWord = word;
    }
})
console.log(longestWord)