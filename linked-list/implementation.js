function LinkedList () {
	this.head = null;
}

function Node (val) {
	return {val, next: null}
}

//add to tail
LinkedList.prototype.insert = function (val) {
	const newNode = new Node(val);
	if(this.head === null){
		this.head = newNode;
		return;
	}
	const recurse = (node) => {
		if (node.next === null){
			node.next = newNode;
			return;
		}
		recurse(node.next);
	}
	recurse(this.head);
	return;
}

//remove from head
LinkedList.prototype.remove = function () {
	if(!this.head) return "linked list empty";
	const tmp = this.head;
	this.head = this.head.next;
	return tmp.val;
}

//visualizing list with an array, for testing purposes
LinkedList.prototype.arrayify = function () {
	if(!this.head) return [];
	if(!this.head.next) return [this.head.val]
	const array = [this.head.val];
	const recurse = (node) => {
		console.log(node)
		if(node.next === null){
			array.push(node.val);
			return;
		}
		array.push(node.val);
		recurse(node.next)
	}
	recurse(this.head.next);
	return array;
}

//check if the list contains a certain value
LinkedList.prototype.contains = function(target) {
	const recurse = (node) => {
		if(node.next === null){
			return node.val === target;
		}
		if(node.val === target) return true;
		recurse(node.next)
	}
	return recurse(this.head);
}

const test = new LinkedList;
test.insert(1);
test.insert(2);
test.insert(3);
test.insert(4);
test.remove();
test.remove();
test.remove();

console.log(test)
console.log(test.arrayify())
console.log(test.contains(5))
