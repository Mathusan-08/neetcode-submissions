class MinStack {
    constructor() {
        this.Stack = []
        this.minStack = []

    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(val <= this.minStack[this.minStack.length-1] || this.minStack.length === 0){
            this.minStack.push(val);
        }
        this.Stack.push(val);

    }

    /**
     * @return {void}
     */
    pop() {
        if(this.minStack[this.minStack.length-1] === this.Stack[this.Stack.length-1]){
            this.minStack.pop()
        }
        this.Stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.Stack[this.Stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length-1];
    }
}
