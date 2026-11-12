class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let words = new Map();
        for(let str of strs){
            let anagram = str.split("").sort().join()
            if(words.has(anagram)){
                words.get(anagram).push(str);
            }
            else{
                words.set(anagram,[str])
            }
        }
    return Array.from(words.values());
    }
}
