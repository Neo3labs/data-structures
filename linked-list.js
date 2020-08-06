function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if(this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
 var newNode = new Node(value, null, this.tail);
 if(this.tail) this.tail.next = newNode;
 else this.head = newNode;
 this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  if(!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if(this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

LinkedList.prototype.removeTail = function() {
  if(!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if(this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};

LinkedList.prototype.search = function(searchValue) {
  var currNode = this.head;
  while(currNode){
    if(currNode.value === searchValue) return currNode.value;
    currNode = currNode.next;
  }
  return null;
}

LinkedList.prototype.indexOf = function(value) {
 var indexes = [];
 var currIndex = 0;
 
 var currNode = this.head;
 
 while(currNode){
   if(currNode.value === value) 
     indexes.push(currIndex);
     currNode = currNode.next;
     currIndex++;
      
 }
 return indexes;
}


