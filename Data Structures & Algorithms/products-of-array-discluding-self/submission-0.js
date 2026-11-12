class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        for(let i =0; i < nums.length; i++){
            let num =1;
            for(let j=0; j <nums.length; j++){
                if(j != i){
                    num  *= nums[j];
                }
            }
            result.push(num);
        }
        return result;
    }
}
