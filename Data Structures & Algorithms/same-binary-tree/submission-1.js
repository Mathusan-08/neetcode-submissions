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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let result = true;
        if(p === null && q === null){
            return true;
        }

        function dfs(node1,node2){
        if(node1 === null && node2 === null){
            return;
        }
        if(node1 === null && node2 !== null){
            result = false;
            return;
        }
        if(node2 === null && node1 !== null){
            result = false;
            return;
        }
        if(node1.val !== node2.val){
            result = false;
            return;
        }
        let leftnode = dfs(node1.left,node2.left);
        let rightnode = dfs(node1.right,node2.right);
    
        }
        dfs(p,q);
        return result;
    }
}
