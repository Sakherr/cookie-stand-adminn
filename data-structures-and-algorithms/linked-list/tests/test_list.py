from linked_list import LinkedList

def test_instantiate_empty_linked_list():
    my_list = LinkedList()
    assert my_list.head is None


def test_insert_into_linked_list():
    my_list = LinkedList()
    my_list.insert('a')
    assert my_list.head.value == 'a'
    assert my_list.head.next is None


def test_insert_multiple_nodes():
    my_list = LinkedList()
    my_list.insert('c')
    my_list.insert('b')
    my_list.insert('a')
    assert my_list.head.value == 'a'
    assert my_list.head.next.value == 'b'
    assert my_list.head.next.next.value == 'c'
    assert my_list.head.next.next.next is None


def test_search_existing_value():
    my_list = LinkedList()
    my_list.insert('c')
    my_list.insert('b')
    my_list.insert('a')
    assert my_list.includes('b') is True


def test_search_nonexistent_value():
    my_list = LinkedList()
    my_list.insert('c')
    my_list.insert('b')
    my_list.insert('a')
    assert my_list.includes('d') is False


def test_return_all_values():
    my_list = LinkedList()
    my_list.insert('c')
    my_list.insert('b')
    my_list.insert('a')
    assert my_list.to_string() == "{ a } -> { b } -> { c } -> NULL"
