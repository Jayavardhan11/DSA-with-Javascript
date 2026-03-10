/*
Write a function countDigits(n)that takes an integer n and returns how many digits it contains.


Requirements:
Handles both positive and negative integers. Return 1 if n is 0(since 0 is a single-digit number).

Examples:
Input:259

Output:3

Input:-1035

Output:4

Input:0

Output:1
*/

const numberOfDigits = (n) => {

  //count negatives to positives
  n = Math.abs(n);
  // checking if number is zero 
  if( n===0 ) return 1;
  //store the count of no.oof digits
  let count = 0;

  while (n > 0) {
   
    n = Math.floor(n / 10);
     count++;
  }
  return count;
};

let res= numberOfDigits(123)
console.log(res);
