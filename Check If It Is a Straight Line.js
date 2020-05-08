// =====================    Problem Statement =================================================================

/*

You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example 1:

Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
Example 2:

Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
 
Constraints:
2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.

*/




//=================================================  Solution =================================================



/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let totalPoints = coordinates.length;
    if(totalPoints === 2){
        return true
    }
    let firstPoints = coordinates[0];
    let secondPoints = coordinates[totalPoints-1];
    let x1 = firstPoints[0];
    let y1 = firstPoints[1];
    let x2 = secondPoints[0];
    let y2 = secondPoints[1];
    let slope = (y2-y1)/(x2-x1)
    
    if (coordinates.find( point => point[1] - y1 !== (slope)*(point[0] - x1))){
        return false
    }
    
    return true
};
