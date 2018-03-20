class Node{
    constructor(name) {
        this.name = name;
        this.children = [];
        this.weight = [];
        this.addChildren = function(children) {
            if (children instanceof Array) {
                for(let i = 0; i < children.length; i++) {
                    if (this.name != children[i]) {
                        this.children.push(children[i]);
                    }
                }
            } else {
                this.children.push(children);
            }
        }
        this.mark = false;
    }
}
class Graph{
    constructor(array){
        this.nodes = [];
        this.getNode = function(value) {
            for(let i = 0; i < this.nodes.length; i++) {
                if (this.nodes[i].name == value) {
                    return this.nodes[i];
                }
            }
        }
        for(let i = 0; i < array.length; i++) {
            let firstNode = this.getNode(array[i][0]);
            if(!firstNode) {
                firstNode = new Node(array[i][0]);
                this.nodes.push(firstNode);
            }
            let secondNode = this.getNode(array[i][1]);
            if(!secondNode) {
                secondNode = new Node(array[i][1]);
                this.nodes.push(secondNode);
            }
            if(array[i].length == 3) {
                firstNode.weight.push(array[i][2]);
                secondNode.weight.push(array[i][2]);
            } else {firstNode.weight.push(0); secondNode.weight.push(0)};
            firstNode.addChildren(secondNode);
            secondNode.addChildren(firstNode);
        }
    }

    depthFirstSearch() {
        let instance = Math.floor(Math.random() * this.nodes.length);
        let node = this.getNode(instance);
        let result = node.name;
        do{
            node.mark = true;
            let tempNode = node;
            for(let i = 0; i < node.children.length; i++) {
                if(!node.children[i].mark) {
                    node = node.children[i]; 
                    node.parent = tempNode;
                    node.mark = true;
                    result += ' -> ' + node.name;
                    break;
                }
            }
            if(tempNode == node) {
                node = node.parent;
            }
        }while(node.parent || !node.children.every(function(x){return x.mark}));
        return result;
    }

    breadthFirstSearch() {
        let instance = Math.floor(Math.random() * this.nodes.length);
        let node = this.getNode(instance);
        let result = node.name;
        let array = new Array(node);
        let arrayTemp;
        do{
            arrayTemp = [];
            for(let i = 0; i < array.length; i++) {
                array[i].mark = true;
                for(let j = 0; j < array[i].children.length; j++) {
                    if(!array[i].children[j].mark) {
                        arrayTemp.push(array[i].children[j]);
                        array[i].children[j].mark = true;
                        result += ' -> ' + array[i].children[j].name;
                    }
                }
            }
            array = arrayTemp;
        }while(arrayTemp.length != 0);
        return result;
    }

    theShortestDistence(first, second) {
        let firstNode = this.getNode(first);
        let secondNode = this.getNode(second);
        firstNode.mark = true;
        firstNode.min = 0;
        while(firstNode != secondNode){
            let minNode;
            for(let nodeT of firstNode.children) {
                if(!nodeT.mark) {
                    minNode = nodeT;
                    break;
                }
            }
            for(let j = 0; j < firstNode.children.length; j++) {
                firstNode.children[j].parent = firstNode;
                if(!firstNode.children[j].mark && (!firstNode.children[j].min || firstNode.children[j].min >= firstNode.min + firstNode.weight[j])) {
                    firstNode.children[j].min = firstNode.weight[j] + firstNode.min;
                }
                if(!firstNode.children[j].mark && minNode.min > firstNode.children[j].min) {
                    minNode = firstNode.children[j];
                } 
            }
            firstNode.mark = true;
            if(!firstNode.children.every(function(x){return x.mark})) {
                firstNode = minNode;
            } else {
                firstNode = firstNode.parent;
            }
        }
        return secondNode.min;
    }
}
console.log((new Graph([[1,0],[0,5],[0,4],[1,2],[1,3],[3,2],[2,4],[4,5],[5,6],[2,6],[6,9],[2,9],[5,7],[5,8],[8,11],[7,11],[7,10],[10,11],[9,7]])).depthFirstSearch());
console.log((new Graph([[0,6],[2,4],[7,1],[2,1],[5,3],[1,3],[0,3]])).depthFirstSearch());
console.log((new Graph([[0,3],[1,3],[2,3],[4,3],[5,4]])).depthFirstSearch());
console.log((new Graph([[1,0],[0,5],[0,4],[1,2],[1,3],[3,2],[2,4],[4,5],[5,6],[2,6],[6,9],[2,9],[5,7],[5,8],[8,11],[7,11],[7,10],[10,11],[9,7]])).breadthFirstSearch());
console.log((new Graph([[0,6],[2,4],[7,1],[2,1],[5,3],[1,3],[0,3]])).breadthFirstSearch());
console.log((new Graph([[0,3],[1,3],[2,3],[4,3],[5,4]])).breadthFirstSearch());
console.log('Для [[1,6,14],[1,2,7],[1,3,9],[2,4,15],[2,3,10],[3,6,2],[3,4,11],[6,5,9],[5,4,6]]');
console.log((new Graph([[1,6,14],[1,2,7],[1,3,9],[2,4,15],[2,3,10],[3,6,2],[3,4,11],[6,5,9],[5,4,6]])).theShortestDistence(1,2));
console.log((new Graph([[1,6,14],[1,2,7],[1,3,9],[2,4,15],[2,3,10],[3,6,2],[3,4,11],[6,5,9],[5,4,6]])).theShortestDistence(1,3));
console.log((new Graph([[1,6,14],[1,2,7],[1,3,9],[2,4,15],[2,3,10],[3,6,2],[3,4,11],[6,5,9],[5,4,6]])).theShortestDistence(1,4));
console.log((new Graph([[1,6,14],[1,2,7],[1,3,9],[2,4,15],[2,3,10],[3,6,2],[3,4,11],[6,5,9],[5,4,6]])).theShortestDistence(1,5));
console.log((new Graph([[1,6,14],[1,2,7],[1,3,9],[2,4,15],[2,3,10],[3,6,2],[3,4,11],[6,5,9],[5,4,6]])).theShortestDistence(1,6));
console.log('Для [[0,3,5],[1,3,11],[2,3,56],[4,3,77],[5,4,89]]');
console.log((new Graph([[0,3,5],[1,3,11],[2,3,56],[4,3,77],[5,4,89]])).theShortestDistence(0,2));
console.log((new Graph([[0,3,5],[1,3,11],[2,3,56],[4,3,77],[5,4,89]])).theShortestDistence(0,3));
console.log((new Graph([[0,3,5],[1,3,11],[2,3,56],[4,3,77],[5,4,89]])).theShortestDistence(0,4));
console.log((new Graph([[0,3,5],[1,3,11],[2,3,56],[4,3,77],[5,4,89]])).theShortestDistence(0,5));