// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let current = head;
        if (head === null) {
            return null;
        }

        let oldToNew = new Map();
        while(current !== null){
            let newnode = new Node(current.val);
            oldToNew.set(current,newnode);
            current = current.next
        }
        current = head;
        while(current !== null){
            let copy = oldToNew.get(current);
            if (current.next !== null) {
                copy.next = oldToNew.get(current.next);
            }
            if(current.random !== null){
                copy.random = oldToNew.get(current.random);
            }

            current = current.next;        
        }
        return oldToNew.get(head);
    }
}
