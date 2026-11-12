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

        let frequencies = Array(26).fill(0);
        for(let i=0; i<s1.length;i++){
            frequencies[s2[i].charCodeAt(0)-97] +=1;            
        }
        let arraysEqual = (a, b) =>a.every((val, index) => val === b[index]);
        if(arraysEqual(letters,frequencies)){
                return true;
            }
        let left =0;
        for(let right=s1.length; right < s2.length; right++){
            frequencies[s2[right].charCodeAt(0)-97] +=1;
            frequencies[s2[left].charCodeAt(0)-97] -=1;
            if(arraysEqual(letters,frequencies)){
                return true;
            }
            left++;
        }
    return false;
    }
}
