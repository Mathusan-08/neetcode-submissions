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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {        
        function dfs(node,p,q){
            if(node === null){
                return;
            }
            
           while(node !== null){
            if(p.val < node.val && q.val < node.val){
                node = node.left;
            }
            else if(p.val > node.val && q.val > node.val){
                node = node.right;
            }
            else{
                return node;
            }
           }
            return null;
        }

        return dfs(root,p,q);        
    }
}
