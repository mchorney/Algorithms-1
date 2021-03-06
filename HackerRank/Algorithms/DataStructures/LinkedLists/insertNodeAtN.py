"""
Insert Node at a specific position
in a linked list. Head can be null
for an empty list.
Return back to head of list.
"""
class Node(object):
    def __init__(self, data=None, next_node=None):
        self.data = data
        self.next = next_node

def InsertNth(head, data, position):
    if head is None:
        head = Node(data, None)
    elif position == 0:
        head = Node(data, head)
    else:
        node = Node(data)
        runner = head
        for _ in range(position - 1):
            runner = runner.next
        node.next = runner.next
        runner.next = node
    return head
