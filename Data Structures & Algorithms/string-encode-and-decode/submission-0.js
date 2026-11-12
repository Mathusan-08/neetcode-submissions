class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for(let str of strs){
            result += str.length + "#" + str; 
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */ 
    decode(str) {
        let result = [];
        for(let i=0; i <str.length; i++){
            let j =i;
            while(str[j] != "#"){
                j++;
            }
            let length = Number(str.slice(i,j));
            result.push(str.slice(j+1,j+length+1))
            i = j+length;
        }
        return result;
    }
}
