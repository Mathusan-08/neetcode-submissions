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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(root === null || subRoot === null){
            return true;
        }

        let result = false;
        function sameTree(node1,node2){
            if(node1 === null && node2 === null){
                return true;
            }
            if(node1 === null || node2 === null){
                return false;
            }

            if(node1.val !== node2.val){
                return false;
            }

            return sameTree(node1.left,node2.left) &&     
            sameTree(node1.right,node2.right);            
        }
        
        
        function dfs(node){
            if(node === null){
                return;
            }
            if(sameTree(node,subRoot)){
                result = true;
                return;
            }
            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);
        return result;
    }
}
