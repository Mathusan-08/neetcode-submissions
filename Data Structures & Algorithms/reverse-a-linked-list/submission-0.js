
//  class ListNode {
//       constructor(val = 0, next = null) {
//           this.val = val;
//           this.next = next;
//       }
//  }

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let previous= null;
        let current = head;
        while(current !== null){
            let nextNode = current.next;//1 2 3 nextnode-2 3 null
            current.next = previous;//current.next - null 1 2
            previous = current;//previous- 1 2 3
            current = nextNode;//current- 2 3 null

        } 
        return previous;
    }
}
