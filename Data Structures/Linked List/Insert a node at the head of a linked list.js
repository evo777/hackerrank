/*
  Insert Node at the beginning of a linked list
  head pointer input could be NULL as well for empty list
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data) {
  //Create new instance of the node
  let node = new Node;

  node.data = data;

  //Set the new head to the head that is being passed in
  node.next = head;

  return node;
}