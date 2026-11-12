class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let left =0;
        let right = heights.length-1;
        while(left < right){
            let width = right-left;
            let height = Math.min(heights[left],heights[right])
            let currentmax = width*height;
            if(currentmax > max){
                max = currentmax;
            }
            if (heights[left] <= heights[right]) {
                left++;
            } 
            else {
                right--;
            }
        }        
        return max;
        }
}
