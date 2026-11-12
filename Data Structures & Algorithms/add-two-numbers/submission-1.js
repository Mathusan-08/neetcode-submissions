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
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0);
        let tail = dummy;
        let carry = 0;

        while (l1 !== null || l2 !== null || carry > 0) {
            let val1 = 0;
            let val2 = 0;

            if (l1 !== null) {
                val1 = l1.val;
            }

            if (l2 !== null) {
                val2 = l2.val;
            }

            let total = val1 + val2 + carry;

            let digit = total % 10;
            carry = Math.floor(total / 10);

            tail.next = new ListNode(digit);
            tail = tail.next;

            if (l1 !== null) {
                l1 = l1.next;
            }

            if (l2 !== null) {
                l2 = l2.next;
            }
        }

        return dummy.next;
    }
}
