class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let sequence = new Set(nums);
        let starts = new Set();
        for(let i=0; i<nums.length; i++){
            if(!sequence.has(nums[i]-1)){
               starts.add(nums[i])
            }
        }

        let length =0;
        for(let start of starts){
            let current = start;
            let currentLength = 1;
            while(sequence.has(current+1)){
                current++;
                currentLength++;
            }
            if(length < currentLength){
                length = currentLength;
            }
        }
        return length;
    }
}
