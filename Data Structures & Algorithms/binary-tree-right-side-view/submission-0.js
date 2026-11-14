/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if(root === null){
            return [];
        }
        
        let result = [];
        let front =0;
        let queue = [root];

        while(front < queue.length){
            let levelsize = queue.length - front;
            let current = null;
            for(let i =0; i < levelsize; i++){
                current = queue[front];
                front++;
                if(current.left !== null){
                    queue.push(current.left);
                }
                if(current.right !== null){
                    queue.push(current.right);
                }

            }
            result.push(current.val);
        }
        return result;
    }

        
    
}
