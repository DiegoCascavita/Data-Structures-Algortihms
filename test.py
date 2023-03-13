class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def append(self, val):
        new_node = ListNode(val)
        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.size += 1

    def remove(self, val):
        curr_node = self.head
        prev_node = None
        while curr_node:
            if curr_node.val == val:
                if not prev_node:
                    self.head = curr_node.next
                else:
                    prev_node.next = curr_node.next
                self.size -= 1
                return True
            prev_node = curr_node
            curr_node = curr_node.next
        return False

    def get(self, index):
        if index < 0 or index >= self.size:
            return None
        curr_node = self.head
        for i in range(index):
            curr_node = curr_node.next
        return curr_node.val
