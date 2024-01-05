// PROBLEM 1 

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function mergeTwoLists(linked_list1, linked_list2) {
    // Create a dummy head to simplify the merging process
    const dummyHead = new Node(null);
    let tail = dummyHead;
  
    while (linked_list1 && linked_list2) {
      if (linked_list1.val <= linked_list2.val) {
        tail.next = linked_list1;
        linked_list1 = linked_list1.next;
      } else {
        tail.next = linked_list2;
        linked_list2 = linked_list2.next;
      }
      tail = tail.next;
    }
  
    // Append remaining nodes from either list
    tail.next = linked_list1 || linked_list2;
  
    return dummyHead.next;
  }
  
  // Example usage:
  const linked_list1 = new Node(1);
  linked_list1.next = new Node(2);
  linked_list1.next.next = new Node(4);
  
  const linked_list2 = new Node(1);
  linked_list2.next = new Node(3);
  linked_list2.next.next = new Node(4);
  
  const mergedList = mergeTwoLists(linked_list1, linked_list2);
  
  console.log("Problem 1")

  // Print the merged list
  let current = mergedList;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
  

  // PROBLEM 2 

  class Node2 {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function reverseList(head) {
    let prev = null;
    let current2 = head;
    let next;
  
    while (current2) {
      next = current2.next;  // Store the next node
      current2.next = prev;  // Reverse the current node's pointer
      prev = current2;       // Move pointers one step forward
      current2 = next;
    }
  
    return prev;  // The new head is the previous tail
  }
  
  // Example usage:
  const head = new Node2(1);
  head.next = new Node2(2);
  head.next.next = new Node2(3);
  head.next.next.next = new Node2(4);
  head.next.next.next.next = new Node2(5);
  
  const reversedList = reverseList(head);
  
  console.log("Problem 2")
  
  
  // Print the reversed list
  let current2 = reversedList;
  while (current2) {
    
    console.log(current2.val);
    current2 = current2.next;
  }
  

//   PROBLEM 3

