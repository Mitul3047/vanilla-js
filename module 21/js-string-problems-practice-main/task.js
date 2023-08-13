
/* // write a function that finds the smallest number of an array with 

function findSmallestNumber(arr) {
   
    let smallest = arr[0]; 
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    
    return smallest;
  }
  
 
  const numbers = [5, 2, 8, 1, 3];
  const smallestNumber = findSmallestNumber(numbers);
  console.log("The smallest number is:", smallestNumber); */

  
/* 
//   একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা ৷


  function calculateArrayAverage(arr) {
    if (!Array.isArray(arr)) {
        return "Input is not an array.";
    }

    if (arr.length === 0) {
        return "Array is empty.";
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }

    const average = sum / arr.length;
    return average;
}

const numbers = [10, 20, 30, 40, 50];
const result = calculateArrayAverage(numbers);
console.log("Average:", result); */


/* 
// একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে
function calculateRectangleArea(length, width) {
    if (length <= 0 || width <= 0) {
      return "Length and width must be greater than zero";
    }
  
    const area = length * width;
    return area;
  }
  
  const length = 5; 
  const width = 3; 
  
  const area = calculateRectangleArea(length, width);
  console.log("Area of the rectangle:", area); */





//   SECOND Laargest in Array
  
function getSecondLargest(nums) {
    let largest = nums[0];
    let secondLargest = nums[0];
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] > secondLargest && nums[i] < largest) {
            secondLargest = nums[i];
        }
    }
    return secondLargest;
}
const arr = [1, 2, 3 ,9876,986,87,765] 
console.log(getSecondLargest(arr))


