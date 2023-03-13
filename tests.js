class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(val) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  remove(val) {
    let currNode = this.head;
    let prevNode = null;

    while (currNode !== null) {
      if (currNode.val === val) {
        if (prevNode === null) {
          this.head = currNode.next;
        } else {
          prevNode.next = currNode.next;
        }
        this.size--;
        return true;
      }
      prevNode = currNode;
      currNode = currNode.next;
    }
    return false;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.next;
    }
    return currNode.val;
  }
} 