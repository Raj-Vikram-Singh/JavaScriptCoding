
// =====================    Problem Statement =================================================================

/*

Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

 

Example 1:

Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
 

Example 2:

Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 

Note:

The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.

*/ 


//=================================================  Solution =================================================


/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    
    let complementArray =[];
    let remainder, complement, power = 0;
    while(num >= 1){
    remainder = num % 2;
    num = Math.floor(num / 2);   
    complement = remainder ? 0 : 1;
    complementArray.push(complement);  
    }
    return  complementArray.reduce((prev, current ) => prev + current* Math.pow(2, power++) ,0);
    
};