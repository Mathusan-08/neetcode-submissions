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
    isValidBST(root) {
        if(root === null){
            return true;
        }
        let result = true;
        function dfs(node,lower,upper){
            if(node === null){
                return;
            }
            if(lower >= node.val || node.val >= upper){
                result = false;
                return;
            }

            dfs(node.left,lower,node.val);
            dfs(node.right,node.val,upper);

        }

        dfs(root,-Infinity,Infinity);
        return result;

    }
}
