class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let letters = Array(26).fill(0);
        if(s1.length > s2.length){
            return false;
        }
        for(let s of s1){
            letters[s.charCodeAt(0)-97] +=1;
        }
            
        for(let right=s1.length; right <= s2.length; right++){
            let frequencies = Array(26).fill(0);
            let left = right-s1.length;
            // console.log(left + "______" + right);
            while(left < right){
                // console.log(left)
                frequencies[s2[left].charCodeAt(0)-97] +=1;
                left++;
            }
            // console.log(frequencies);
            let arraysEqual = (a, b) =>a.every((val, index) => val === b[index]);
            if(arraysEqual(letters,frequencies)){
                return true;
            }
        }
    return false;
    }
}
