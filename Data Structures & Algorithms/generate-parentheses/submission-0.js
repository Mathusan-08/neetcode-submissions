class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
let results = [];
function backtrack(open,close,current){
     if(open === n && close === n){
        results.push(current)
        return;
     }
   if(open < n){ 
            backtrack(open+1,close,current+"(")
}
if(open >close){ 
            backtrack(open,close+1,current+")")
}

}
backtrack(0,0,"");
return results;

}
    
}
