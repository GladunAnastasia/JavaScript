function Item(value) {
	this.value = value;
}
function LinkedList(number) {
	//Добавление элемента в список
	this.add = function(element) {
		let it = new Item(element);
		if(this.last === undefined) {
			this.first = it;
			this.last = it;
		} else {
			this.last.next = it;
			this.last.next.prev = this.last;
			this.last = this.last.next;
		}
	}
	//Получение элемента по значению
	this.get = function(element) {
		let tempItem = this.first;
		while(tempItem !== undefined) {
			if(tempItem.value == element) {
				return tempItem;
			}
			tempItem = tempItem.next;
		}
	}
	//Удаление первого вхождения элемента
	this.removeFirst = function(element) {
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
	}
	//Удаление всех вхождений элемента
	this.removeAll = function(element) {
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
	}
	//Очищение списка
	this.clear = function() {
		this.first = undefined;
		this.last = undefined;
	}
	//Печать списка
	this.printList = function() {
		let tempItem = this.first;
		console.log(tempItem ? "Список: " : "Список пуст");
		while(tempItem !== undefined) {
			console.log(tempItem);
			tempItem = tempItem.next;
		}
	}
	//Сложение двух списков
	this.plus = function(list) {
		let tempItem = this.first;
		let thisSum = getSum(tempItem);
		tempItem = list.first;
		let listSum = getSum(tempItem);
		let result = Number(thisSum) + Number(listSum);
		function getSum(item) {
			let sum = 0;
			while(item !== undefined) {
				sum += item.value;
				item = item.next;
			}
			return sum;
		}
		return new LinkedList(String(result).split('').reverse().join(''));
	}
	this.rightNumber = function(number) {
		let flag = true;
		String(number).split('').forEach(function(value) {if(value === 'e') {flag = false}});
		return flag;
	}
	//Преобразование числа в список
	this.numberToList = function(number) {
		console.log("HERE!");
		if(isNaN(number)) {
			console.log("В JavaScript нет представления для введенного числа. Создан пустой список.");
			return new LinkedList();
		}
		if(typeof number === 'number' && number > Number.MAX_SAFE_INTEGER || !this.rightNumber(number)) {
			console.log("Слишком длинное число или число с экспонентой. Передайте число в формате строки. Создан пустой список.");
			return new LinkedList();
		}
		let list = new LinkedList();
		String(number).split('').forEach(function(value, index) {list.add(value)});
		console.log(list);
		return list;
	}
	if(number !== undefined) {
		return this.numberToList(number);
	}
}
let listFirst = new LinkedList('243');
let listSecond = new LinkedList('564');
listFirst.plus(listSecond).printList();//--->  '708'
let list = (new LinkedList('12345678946573645762398489899'));
list.removeAll(1);
list.removeAll(9);
list.removeAll(8);
list.printList();