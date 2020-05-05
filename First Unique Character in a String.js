// =====================    Problem Statement =================================================================

/*

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

*/




//=================================================  Solution =================================================



/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (let i = 0; i< s.length; i++){
       if (s.indexOf(s[i]) === s.lastIndexOf(s[i])){
           return i;   
       }
    }
    return -1;
};