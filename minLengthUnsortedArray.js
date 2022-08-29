/*
Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.

 

Example 1:

Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Example 2:

Input: nums = [1,2,3,4]
Output: 0
Example 3:

Input: nums = [1]
Output: 0
*/ 

/**
 * @param {number[]} nums
 * @return {number}
 */

var findUnsortedSubarray = function(nums) {
    
    let start = 0;
    let end = nums.length - 1;
    
    for(let i = 0; i< nums.length; i++){ //Find the start index of unsorted arr
        if(nums[i] > nums[i+1]) {
            start = i;
            break;
        } else if(i === nums.length-1) {
             return 0
        }
    }
    
    for(let i = nums.length -1; i > 0; i--){ //find the end index of unsorted arr
        if(nums[i] < nums[i-1]) {
            end = i;
            break;
        }
    }
    
    const unsortedArr = nums.slice(start, end + 1); //slice to get the unsorted arr
    let min = Infinity;
    let max = -Infinity;
    
    for(let i = 0; i < unsortedArr.length; i++){
        if(unsortedArr[i] < min) { //Find min of the arr >
            min = unsortedArr[i]
        }
        if(unsortedArr[i] > max) { //find max of the arr
            max = unsortedArr[i]
        }
    }
    
    for(let i = 0; i < start; i++) {
        if(nums[i] > min) { //slide start index to left if min is  < nums[i]
            start = i;
            break;
        }
    }
    
    for(let i = nums.length - 1; i > end; i--) {
        if(nums[i] < max) { //slide end index to right if max is  > nums[i]
            end = i;
            break;
        }
    }
    
    return end - start + 1
};

const testArr = [2,6,4,8,10,9,15];
findUnsortedSubarray(testArr);
