class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length-1;
        let indices = []
        while(left < right){
            let sum = numbers[left] + numbers[right];
            if(sum === target){
                indices.push(left+1);
                indices.push(right+1);
                return indices;
            }
            else if(sum < target){
                left++;
            }
            else{
                right--;
            }
        }
    }
}
