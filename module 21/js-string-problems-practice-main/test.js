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