/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let l1=list1;
    let l2=list2;
    let p1,p2,p3;
    let index=0;
    while(l1!=null)
    {    
        if(index==a-1)
        {
            //store the pointer
            p1=l1;
        }
        if(index==b)
        {
            //store the pointer
            p2=l1;
        }
        l1=l1.next;
        index++;

    }

    while(l2!=null)
    {   
        p3=l2;
        l2=l2.next;
    }

        p1.next=list2;
        p3.next=p2.next;

    return list1;
};
