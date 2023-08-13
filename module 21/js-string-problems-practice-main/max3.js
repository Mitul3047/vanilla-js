const jim = 69;
const dela = 97;
const chinku = 99;

if (jim > dela && jim > chinku) {
    console.log('Jim will get the cake');
}
else if (dela > jim && dela > chinku) {
    console.log('Dela will eat cake in this bela');
}
else {
    console.log('Chinku will get the cake');
}

var max=Math.max(12, 45);
console.log(max)




/* 
// Homework: 1
// write a function that will take 3 numbers will return the max number
// first time do it using if-else

function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// Example usage
const num1 = 5;
const num2 = 12;
const num3 = 8;

const maxNum = findMax(num1, num2, num3);
console.log("The maximum number is:", maxNum);
// second time do it using Math.min or Math.max
function findMaxNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// Example usage
const maxNumber = findMaxNumber(10, 5, 8);
console.log(maxNumber); // This will output 10

// Write a function that will take 3 parameters and will return the min number
// first time do it using if-else

function findMin(a, b, c) {
    if (a <= b && a <= c) {
        return a;
    } else if (b <= a && b <= c) {
        return b;
    } else {
        return c;
    }
}

// Example usage
const num1 = 5;
const num2 = 12;
const num3 = 8;

const minNum = findMin(num1, num2, num3);
console.log("The minimum number is:", minNum);

// second time do it using Math.min or Math.max
function findMinNumber(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

// Example usage
const minNumber = findMinNumber(10, 5, 8);
console.log(minNumber); // This will output 5
 */