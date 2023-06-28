"use strict";

//                               Logical program questions.
//                                       Set 1:

// 1. Write a JavaScript program to calculate the factorial of a given non-negative integer.


function factorial(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorial(num - 1));
  }
}
factorial(4);
console.log(factorial(4)); // output is 24;

// 2. Write a JavaScript function to find the maximum element in an array.
// Sample Input: ([1, 3, 2, 28, 20, 10, 50, 37]);
// Sample output: 50

const arr1 = [1, 3, 2, 28, 20, 10, 50, 37];

console.log(Math.max(...arr1));


// 3. Write a JavaScript program to remove a specific element from an array.
// Sample Input: ([1, 2, 3, 20, 4, 5, 6], 20);
// Sample Output: [1, 2, 3, 4, 5, 6]


function removeArrEl(array, n){
  const index = array.indexOf(n);
  if (index > -1) {
    array.splice(index, 1);
}
  return array;
}

console.log(removeArrEl([1, 2, 3, 20, 4, 5, 6], 20));


// 4. Write a JavaScript program to find the second smallest element in an array.
// Sample Input: ([5, 2, 9, 1, 7]);
// Sample Output: 2


let arr = [ 5, 2, 9, 1, 7 ];
		arr.sort((a,b) => a-b);
		const secondMin = arr[1];
		console.log(secondMin);



// 5. Write a JavaScript function to check if two arrays are equal (contain the same elements in the same order).
// Sample Input: ([1, 2, 3], [1, 2, 3]);
// Sample output: true


const a = [1, 2, 3];  
const b = [1, 2, 3];  
const c = a;  
if (a === c)  
console.log("The arrays have the same elements.")  
else  
console.log("The arrays have different elements.")  


// 6. Write a JavaScript program to find the maximum sum subarray within a given array of numbers.
// Sample Input: ([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// Sample Ouput: 6







// 7. Write a JavaScript function to calculate the power of a number recursively.
// Sample Input: (2, 4);
// Sample Output: 16

let power = function(a, n) {
  if (n === 0) 
  {
    return 1;
    }
  else 
  {
    return a * power(a, n-1);
  }
};

console.log(power(2, 4));


// 8. Write a JavaScript function to sort an array of numbers in ascending order.
// Sample Input:5,2,9,1,8
// Sample Ouput:1,2,5,8,9

let Sample =[5,2,9,1,8];  
let res =Sample.sort(function compare(a,b)  
{  
  return a-b;  
});  
console.log(res);



// 9. Write a JavaScript function to find the number of occurrences of a substring in a given string.
// Sample Input: (&quot;Hello, hello, hello&quot;, &quot;hello&quot;);
// Sample Output: 3

let myString = "&quot;Hello, hello, hello&quot;, &quot;hello&quot";
let mySubString = "hello";

let count = myString.split(mySubString).length - 1;
console.log(count);







// 10. Write a JavaScript function to find the intersection of two arrays without duplicates.
// Sample Input: ([1, 2, 3, 5, 9], [1, 3, 5, 8]);
// Sample Output: [1, 3, 5]

function performIntersection(arr1, arr2) {

  const intersectionResult = arr1.filter(x => arr2.indexOf(x) !== -1);

  return intersectionResult;

}

const array1 = [1, 2, 3, 5, 9];
const array2 = [1, 3, 5, 8];

const result = performIntersection(array1, array2);
console.log(result);