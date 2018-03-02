function Item(value) {
	this.value = value;
}
function LinkedList(number) {
	if(number !== undefined) {
		//Преобразование числа в список. Вызывается при создании объекта с параметром number.
		function numberToList(number) {
			if(typeof number === 'number' && number > Number.MAX_SAFE_INTEGER) {
				console.log("Слишком длинное число. Передайте число в формате строки. Создан пустой список.");
				return new LinkedList();
			}
			if(!rightNumber(number)) {
				console.log("В JavaScript нет представления для введенного числа, либо число с экспонентой. Создан пустой список.");
				return new LinkedList();
			}
			let list = new LinkedList();
			String(number).split('').forEach(function(value, index) {list.add(value)});
			return list;
		}
		function rightNumber(number) {
			return String(number).split('').every(function(x){return x!=='e'}) && !isNaN(number);
		}
		return numberToList(number);
	}
}
//Добавление элемента в список
LinkedList.prototype.add = function(element) {
		let it = new Item(element);
		if(this.last === undefined) {
			this.first = it;
			this.last = it;
		} else {
			this.last.next = it;
			this.last.next.prev = this.last;
			this.last = this.last.next;
		}
	};
//Получение элемента по значению
LinkedList.prototype.get = function(element) {
		let tempItem = this.first;
		while(tempItem !== undefined) {
			if(tempItem.value == element) {
				return tempItem;
			}
			tempItem = tempItem.next;
		}
	};
//Удаление первого вхождения элемента
LinkedList.prototype.removeFirst = function(element) {
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
	};
//Удаление всех вхождений элемента
LinkedList.prototype.removeAll = function(element) {
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
	};
//Очищение списка
LinkedList.prototype.clear = function() {
		this.first = undefined;
		this.last = undefined;
	};
//Печать списка
LinkedList.prototype.printList = function() {
		let tempItem = this.first;
		console.log(tempItem ? "Список: " : "Список пуст");
		while(tempItem !== undefined) {
			console.log(tempItem);
			tempItem = tempItem.next;
		}
	};
//Сложение двух списков
LinkedList.prototype.plus = function(list) {
		function getSum(item) {
			let sum = 0;
			while(item !== undefined) {
				sum += item.value;
				item = item.next;
			}
			return sum;
		}
		return new LinkedList(String(Number(getSum(this.first)) + Number(getSum(list.first))).split('').reverse().join(''));
	};

let listFirst = new LinkedList('243');
let listSecond = new LinkedList('564');
listFirst.plus(listSecond).printList();//--->  '708'
listFirst = new LinkedList('183');
listSecond = new LinkedList('82543');
listFirst.plus(listSecond).printList();//--->  '62728'
let list = (new LinkedList(123456789));
list.add(0);
list.add(11);
list.removeAll(1);
list.removeAll(9);
list.removeAll(8);
list.printList();