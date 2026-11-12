class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let results = [];
        nums = nums.toSorted((a, b) => a - b);
        for(let i =0; i < nums.length; i++){
            if (i > 0 && nums[i] === nums[i - 1]) {
               continue;
            }
             let j = 1+i;
             let k = nums.length-1;
             let target = -nums[i]
             while(k>j){
                if(target === nums[j]+nums[k]){
                    let result = [];
                    result.push(nums[i]);
                    result.push(nums[j]);
                    result.push(nums[k]);
                    results.push(result);
                    j++;
                    k--; 

                    while (j < k && nums[j] === nums[j - 1]) {j++;}
                    while (j < k && nums[k] === nums[k + 1]) {k--;}                   
                }
                else if(nums[j]+nums[k] < target){
                    j++;
                }
                else{
                    k--;
                }
             }
        }
        return results;
    }
}
