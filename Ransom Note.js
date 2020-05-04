
// =====================    Problem Statement =================================================================
/* 
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/





//=================================================  Solution =================================================




/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */


var canConstruct = function(ransomNote, magazine) {

    if(magazine.includes(ransomNote)){
        return true
    };
    let count = 0;
    let magazineArray = magazine.split('')
    
     for (let i = 0; i < ransomNote.length; i++ ){
         let index = magazineArray.indexOf(ransomNote[i])
        if (index!= -1){
            delete magazineArray[index]
            count++
        }
     }
    if(count === ransomNote.length ){
        return true
    } else{
        return false
    }
};