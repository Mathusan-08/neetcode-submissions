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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if(root === null){
            return 0;
        }
        let result = 0;
        let count =1;
        function dfs(node){
            if(!node){
                return;
            }

            dfs(node.left);
            if(count === k){
                result = node.val;
            }
            count++;
            dfs(node.right);
        }
        dfs(root);
        return result;
    }
}
