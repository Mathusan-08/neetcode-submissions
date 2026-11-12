/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
       let slow = head; 
       let fast = head.next; 
       while (fast !== null && fast.next !== null) { 
            slow = slow.next; fast = fast.next.next; 
        }
        
        let second = slow.next;
        slow.next = null;

        let previous = null;
        let current = second;
        while (current !== null) {
            let nextNode = current.next;
            current.next = previous;
            previous = current;
            current = nextNode;
        }
        second = previous;

        let first = head;
        while(second !== null){
            let firstNext = first.next;
            let secondNext = second.next;
            first.next = second;
            second.next = firstNext; 
            first = firstNext;
            second = secondNext;
        }

    }
}
