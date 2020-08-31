function ListNode(val) {
  this.val = val;
  this.next = null;
}


var head, mynode
for (var index = 0; index < 11; index++) {
    if(index === 0){
        mynode = head  = new ListNode(0)
    }else{
        var currentNode = new ListNode(index)
        mynode.next = currentNode
        mynode = currentNode
    }
}

showList(head)


var reverseList1 = function(head) {
    debugger
    var prev = null;curr = head;
    while(curr){
        var curNext = curr.next;//修改前先记住下一个节点
        curr.next = prev; //改别指向，第一个节点prev是null,
        prev = curr; //记录前一个节点，供下次循环使用
        curr = curNext; // cur通过temp指向下一节点
    }
    return prev;//cur会多循环直到null
};



var reverseList2 = function(head) {
    debugger
    [curr, pre] = [head, null];
    while(curr) [curr.next, pre, curr] = [pre, curr, curr.next];
    return pre;
};




var swapPairs = function(head) {
    let thead = new ListNode(0);
    thead.next = head;
    let pre = thead;
    debugger
    while(pre.next != null && pre.next.next != null){
        // 确定新的起始点
        let start = pre.next;
        let end = start.next;

        pre.next = end;

        // 交换起始位置
        start.next = end.next;
        end.next = start;

        // 设置新的参考点
        pre = start;
    }
    return thead.next;
};

var swapPairs2 = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    var count = 1;
    var currNode = head;
    var preNode = null;
    var nextNode = null;
    var tail = null;
    var newHead = null;

    while (currNode.next != null) {
        preNode = currNode;
        currNode = currNode.next;
        count++;
        if (count == 2) {
            newHead = currNode;
        }
        if (count % 2 == 0) {
            nextNode = currNode.next;
            currNode.next = preNode;
            preNode.next = nextNode;
            if (tail != null) {
                tail.next = currNode;
            }
            tail = preNode;
            currNode = preNode;
        }
    }
    return newHead;
};


// var r1 = reverseList1(head)
// console.log(r1)
// var r2 = reverseList2(head)
// console.log(r2)
var r3 = swapPairs2(head)
showList(r3)

function showList(list){
    console.log(list.val)
    while(list.next){
        list =  list.next
        console.log(list.val)
    }
}
