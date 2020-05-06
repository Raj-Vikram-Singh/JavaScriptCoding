
// =====================    Problem Statement =================================================================

/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

*/



//=================================================  Solution =================================================



/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let mappingObj ={};
    let arrayLength = nums.length;
    let majorityLength = Math.floor(arrayLength/2)
     for(let i = 0; i < arrayLength; i++){
         if(mappingObj[nums[i]]){
             mappingObj[nums[i]]++;
         } else{
             mappingObj[nums[i]] = 1; 
         }
         
         if(mappingObj[nums[i]] > majorityLength){
             return nums[i]
         }
     }
     return Object.keys(mappingObj).find(item => mappingObj[item] > majorityLength); 
 };
