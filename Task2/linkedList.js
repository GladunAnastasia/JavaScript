function item(value) {
	this.value = value;
}

linkedList = {
	add(element) {
		let it = new item(element);
		if(this.last === undefined) {
			this.first = it;
			this.last = it;
		} else {
			this.last.next = it;
			this.last.next.prev = this.last;
			this.last = this.last.next;
		}
	},
	get(element) {
		let tempItem = this.first;
		while(tempItem !== undefined) {
			if(tempItem.value === element) {
				return tempItem;
			}
			tempItem = tempItem.next;
		}
	},
	removeFirst(element) {
		let tempItem = this.get(element);
		if (tempItem !== undefined){
			if(this.first === tempItem && this.last === tempItem){ 
				this.first = undefined;
				this.last = undefined;
			} else if(tempItem === this.first) {
				this.first = tempItem.next;
				tempItem.next.prev = undefined;
			} else if(tempItem === this.last){
				this.last = tempItem.prev;
				tempItem.prev.next = undefined;
			} else {
				tempItem.prev.next = tempItem.next;
				tempItem.next.prev = tempItem.prev;
			}
		}
	},
	removeAll(element) {
		let tempItem;
		while((tempItem = this.get(element))){
			if(this.first === tempItem && this.last === tempItem){ 
				this.first = undefined;
				this.last = undefined;
			} else if(tempItem === this.first) {
				this.first = tempItem.next;
				tempItem.next.prev = undefined;
			} else if(tempItem === this.last){
				this.last = tempItem.prev;
				tempItem.prev.next = undefined;
			} else {
				tempItem.prev.next = tempItem.next;
				tempItem.next.prev = tempItem.prev;
			}
		}
	},
	printList() {
		let tempItem = this.first;
		while(tempItem !== undefined) {
			console.log(tempItem);
			tempItem = tempItem.next;
		}
	}
}
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.printList();
console.log('-----------------------------');
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.removeAll(7);
linkedList.removeAll(1);
/*linkedList.removeFirst(1);
linkedList.removeFirst(2);
linkedList.removeFirst(3);
linkedList.removeFirst(4);
linkedList.removeFirst(5);*/
linkedList.printList();