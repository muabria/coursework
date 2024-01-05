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
  
    // Append remaining node3s from either list
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
      next = current2.next;  // Store the next node3
      current2.next = prev;  // Reverse the current3 node3's pointer
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

class Node3 {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function removeElements(head, value) {
    let dummyHead = new Node3(null);
    dummyHead.next = head;
    let current3 = dummyHead;
  
    while (current3.next) {
      if (current3.next.val === value) {
        current3.next = current3.next.next; // Skip over the node3 to be removed
      } else {
        current3 = current3.next; // Move to the next node3
      }
    }
  
    return dummyHead.next; // Return the modified list's head
  }
  
  // Example usage:
  const head2 = new Node3(1);
  head2.next = new Node3(2);
  head2.next.next = new Node3(6);
  head2.next.next.next = new Node3(3);
  head2.next.next.next.next = new Node3(4);
  head2.next.next.next.next.next = new Node3(5);
  head2.next.next.next.next.next.next = new Node3(6);
  
  const valueToRemove = 6;
  const modifiedList = removeElements(head2, valueToRemove);
  
console.log("Problem 3")

  // Print the modified list
  let current3 = modifiedList;
  while (current3) {
    console.log(current3.val);
    current3 = current3.next;
  }
  




  // PROBLEM 4

  class Node4 {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function swapPairs(head) {
    if (!head || !head.next) {
      return head; // Base case: empty or single-node list
    }
  
    let newHead = head.next; // Start with the second node as the new head
    let prev = new Node(null); // Dummy node to keep track of previous pairs
  
    while (head && head.next) {
      let nextPair = head.next.next; // Store the next pair to connect later
  
      // Swap the current pair:
      head.next.next = head;
      prev.next = head.next;
  
      // Move pointers to the next pair:
      head = nextPair;
      prev = prev.next.next;
    }
  
    return newHead;
  }
  
  // Example usage:
  const head3 = new Node4(1);
  head3.next = new Node4(2);
  head3.next.next = new Node4(3);
  head3.next.next.next = new Node4(4);
  
  const swappedList = swapPairs(head);

  console.log("Problem 4")
  
  // Print the swapped list
  let current4 = swappedList;
  while (current4) {
    console.log(current4.val);
    current4 = current4.next;
  }