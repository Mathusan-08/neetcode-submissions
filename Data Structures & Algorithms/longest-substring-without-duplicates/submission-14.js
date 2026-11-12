class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let result = 0;
        let substring = new Set();
        let left =0;
        for(let i=0; i <s.length; i++){ 
            // if(i>0 && s[i] === s[i-1]){
            //     continue;
            // }
            while(substring.has(s[i])){
                substring.delete(s[left]);
                left++;
            }
            substring.add(s[i]);
            result = Math.max(result,substring.size);
            //  console.log(substring)
        }

    return result;
    }
}
