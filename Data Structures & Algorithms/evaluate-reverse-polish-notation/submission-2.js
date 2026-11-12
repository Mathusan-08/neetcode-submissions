class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let i= 0; i < tokens.length; i ++){
            if(!isNaN(tokens[i])){
                stack.push(Number(tokens[i]))
            }
            else{
                const b = Number(stack.pop());
                const a = Number(stack.pop());
                if(tokens[i] === "+"){
                    stack.push(a+b);
                }
                else if(tokens[i] === "-"){
                    stack.push(a-b);
                }
                else if(tokens[i] === "*"){
                    stack.push(a*b);
                }
                else if(tokens[i] === "/"){
                    stack.push(Math.trunc(a / b));
                }
            }
        }
        return stack[0];
    }
}
