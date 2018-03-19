class Node{
    constructor(name) {
        this.name = name;
        this.children = [];
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
            firstNode.addChildren(secondNode);
            secondNode.addChildren(firstNode);
        }
    }

    depthFirstSearch() {
        let instance = Math.floor(Math.random() * this.nodes.length);
        let result = this.getNode(instance).name;
        depth(this.getNode(instance));
        function depth(node) {
            node.mark = true;
            let tempNode = node;
            for(let i = 0; i < node.children.length; i++) {
                if(!node.children[i].mark) {
                    node = node.children[i]; 
                    node.parent = tempNode;
                    node.mark = true;
                    result += ' -> ' + node.name;
                    depth(node);
                    return;
                }
            }
            if(!node.parent) {
                return;
            }
            depth(node.parent);
        }
        return result;
    }

    breadthFirstSearch() {
        let instance = Math.floor(Math.random() * this.nodes.length);
        let result = this.getNode(instance).name;
        breadth(new Array(this.getNode(instance)));
        function breadth(array) {
            let arrayTemp = [];
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
            if(arrayTemp.length == 0) {
                return;
            }
            breadth(arrayTemp)
        }
        return result;
    }
}
let graph1 = new Graph([[1,0],[0,5],[0,4],[1,2],[1,3],[3,2],[2,4],[4,5],[5,6],[2,6],[6,9],[2,9],[5,7],[5,8],[8,11],[7,11],[7,10],[10,11]]);
let graph2 = new Graph([[0,6],[2,4],[7,1],[2,1],[5,3],[1,3],[0,3]]);
let graph3 = new Graph([[0,3],[1,3],[2,3],[4,3],[5,4]]);
let graph4 = new Graph([[1,0],[0,5],[0,4],[1,2],[1,3],[3,2],[2,4],[4,5],[5,6],[2,6],[6,9],[2,9],[5,7],[5,8],[8,11],[7,11],[7,10],[10,11]]);
let graph5 = new Graph([[0,6],[2,4],[7,1],[2,1],[5,3],[1,3],[0,3]]);
let graph6 = new Graph([[0,3],[1,3],[2,3],[4,3],[5,4]]);
console.log(graph1.depthFirstSearch());
console.log(graph2.depthFirstSearch());
console.log(graph3.depthFirstSearch());
console.log(graph4.breadthFirstSearch());
console.log(graph5.breadthFirstSearch());
console.log(graph6.breadthFirstSearch());