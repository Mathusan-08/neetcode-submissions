class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleans = s.replace(/[^a-zA-Z0-9]/g, "");
        for(let i=0; i < cleans.length/2; i++){
            console.log(cleans[i].toLowerCase()  + " " + cleans[cleans.length-1-i].toLowerCase())
            if(cleans[i].toLowerCase()  != cleans[cleans.length-1-i].toLowerCase()){
                return false;
            }
        }
        return true;
    }
}
