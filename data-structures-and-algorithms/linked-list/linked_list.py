class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def insert(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
        else:
            new_node.next = self.head
            self.head = new_node

    def includes(self, value):
        current = self.head
        while current is not None:
            if current.value == value:
                return True
            current = current.next
        return False

    def to_string(self):
        if self.head is None:
            return "NULL"
        else:
            result = ""
            current = self.head
            while current is not None:
                result += "{{ {} }} -> ".format(current.value)
                current = current.next
            result += "NULL"
            return result
my_list = LinkedList()
my_list.insert('a')
my_list.insert('b')
my_list.insert('c')

print("Linked List: {}".format(my_list.to_string()))

print("Includes 'b': {}".format(my_list.includes('b')))
print("Includes 'd': {}".format(my_list.includes('d')))