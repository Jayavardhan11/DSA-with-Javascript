/*
Problem statement
Write a function secondLargest(arr) that returns the second largest distinct number in an array.

Example:

Input: arr = [1, 2, 3, 4, 5]
Output: 4
Input: arr = [1, 1, 2, 3, 4, 5]
Output: 4
Requirements
at least 2 distinct numbers if all elements equal return "No second largest number"
*/

var secondHighest = function (s) {
  let digits = [];

  for (let char of s) {
    if (!isNaN(char) && char != " ") {
      digits.push(Number(char));
    }
  }

  if (digits.length < 2) return -1;

  let first = -Infinity , second = -Infinity;

  for(let i =0 ; i < digits.length ; i++){
    if(digits[i] > first ){
      second = first;
      first = digits[i];

    }else if(digits[i] > second && digits[i] != first ){
      second = digits[i];
    }
  }
  return second === -Infinity? -1 : second
};

let res = secondHighest("123 567 322 ");
console.log(res);
