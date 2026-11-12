class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let result = 0;
        let maxFrequency = 0;
        const frequencies = new Map();

        for (let right = 0; right < s.length; right++) {
            frequencies.set(s[right],(frequencies.get(s[right]) || 0) + 1);
            maxFrequency = Math.max(maxFrequency,frequencies.get(s[right]));

            while((right - left + 1) - maxFrequency > k){
                frequencies.set(s[left], frequencies.get(s[left])-1);
                left++;
            }

            result = Math.max(result, right - left + 1);
        }

        return result;
    }
}
