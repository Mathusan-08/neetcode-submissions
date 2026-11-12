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
     * @return {boolean}
     */
    isBalanced(root) {
        let isbalanced = true;
        if(root === null){
            return true;
        }
        function dfs(node){
            if(node === null){
                return 0;
            }
            let leftheight = dfs(node.left);
            let rightheight = dfs(node.right);

            if(Math.abs(leftheight-rightheight) > 1){
                isbalanced = false;
            }           

            return 1 + Math.max(leftheight, rightheight);
        }
        
        dfs(root);
        return isbalanced;

        
    }
}
