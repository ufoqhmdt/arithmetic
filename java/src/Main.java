import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        System.out.println("Hello World!");
        Solution s = new Solution();
        ListNode oln = make();
        System.out.println(oln.val);
        while(oln.next !=null){
            oln = oln.next;
            System.out.println(oln.val);
        }
        System.out.println("---------");
        ListNode ln  = s.swapPairs(make());
        System.out.println(ln.val);
        while(ln.next != null){
            ln = ln.next;
            System.out.println(ln.val);
        }
    }

    public static ListNode make() {
        ListNode originLn = new ListNode(0);
        ListNode myLn = originLn;
        for (int i = 1; i < 11; i++) {
            ListNode curr = new ListNode(i);
            myLn.next = curr;
            myLn = curr;
        }
        return originLn;
    }
}


class Solution {

    public void swapMethodByRecursion(ListNode lastNode, ListNode head) {
        ListNode one = head;
        ListNode two = one != null ? one.next : null;
        ListNode temp = two != null ? two.next : null;
        if (one == null || two == null) {
            return;
        }
        if (lastNode != null) {
            lastNode.next = two;
            one.next = temp;
            two.next = one;
        } else {
            one.next = temp;
            two.next = one;
        }
        swapMethodByRecursion(one, temp);
    }

    public ListNode swapPairsByMode(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }

        int count = 1;
        ListNode curr = head;
        ListNode preNode = null;
        ListNode tmp = null;
        ListNode tail = null;
        ListNode newHead = null;

        while (curr.next != null) {
            preNode = curr;
            curr = curr.next;
            count++;
            if (count == 2) {
                newHead = curr;
            }
            if (count % 2 == 0) {
                tmp = curr.next;
                curr.next = preNode;
                preNode.next = tmp;
                if (tail != null) {
                    tail.next = curr;
                }
                tail = preNode;
                curr = preNode;
            }
        }
        return newHead;
    }
}


class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}


