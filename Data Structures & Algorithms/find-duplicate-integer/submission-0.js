class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {

        let slow = 0;
        let fast = 0;

        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow !== fast);

        let pointer = 0;

        while(slow !== pointer){
            slow = nums[slow];
            pointer = nums[pointer]
        }
        return pointer;

    }
}
