class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let leftrow = 0;
        let rightrow = matrix.length-1;
        while(leftrow <= rightrow){
            let left =0;
            let midrow = leftrow + Math.floor((rightrow-leftrow)/2);
            let right =matrix[midrow].length-1;
            if(matrix[midrow][matrix[midrow].length-1] === target){
                return true;
            }
            else if(matrix[midrow][matrix[midrow].length-1] < target){
                leftrow = midrow+1;
                continue;
            }
            else if(matrix[midrow][0] > target){
                rightrow = midrow-1;
                continue;
            }

            while(left <= right){
                let mid = left + Math.floor((right-left)/2);
                if(target === matrix[midrow][mid]){
                    return true;
                }
                else if(matrix[midrow][mid] > target){
                    right = mid-1;
                }
                else{
                    left = mid+1
                }
            }
            return false;
        }
        return false;
    }
}
