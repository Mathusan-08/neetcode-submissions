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
     * @return {number}
     */
    goodNodes(root) {
        if(root === null){
            return 0;
        }

        let counter =0;
        let max = root.val;
        
        function dfs(node,max){
        if(node === null){
            return;
        }
        if(node.val >= max){
            counter++;
            max = node.val;
        }

        dfs(node.left,max);
        dfs(node.right,max);
        }
        
        dfs(root,max);
        return counter;
    }
}
