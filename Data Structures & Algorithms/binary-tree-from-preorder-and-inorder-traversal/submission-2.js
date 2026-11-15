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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const indexes = new Map();
        for (let i = 0; i < inorder.length; i++) {
            indexes.set(inorder[i], i);
        }
        let preorderIndex =0;

        function dfs(l,r){
            if (l > r) {
                return null;
            }
            let rootValue = preorder[preorderIndex];
            preorderIndex++;
            let rootIndex = indexes.get(rootValue);
            let node = new TreeNode(rootValue);

            node.left = dfs(l,rootIndex-1);
            node.right = dfs(rootIndex+1,r);
            return node;
        }
        return dfs(0,inorder.length-1);
    
    }
}
