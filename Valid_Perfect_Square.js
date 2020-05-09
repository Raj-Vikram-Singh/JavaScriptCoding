// =====================    Problem Statement =================================================================

/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true
Example 2:

Input: 14
Output: false
*/




//=================================================  Solution =================================================




/**
 * @param {number} num
 * @return {boolean}
 */
// Method 1:

var isPerfectSquare = function(num) {
   if ((Math.sqrt(num)*10) % 10 === 0){
       return true;
   }
    return false;
};


// Method 2:

var isPerfectSquare = function(num) {
  let i = 1;
  while(i*i < num){
    i++
  }
  return i*i === num;
}
