//Правильная скобочная последовательность
//Рекурсия
function rightSequence(str) {
    let input = ['{','[','('];
    let backInput = ['}',']',')'];
    let array = str.split('');
    for(let i = 0; i < array.length; i++) {
    	let temp = input.indexOf(array[i]);
        if(temp >= 0 && temp == backInput.indexOf(array[i + 1])){
            array[i] = undefined;
            array[i + 1] = undefined;
        }
    }
    let newStr = array.join('');
    if(str == newStr){
        return false;
    }
    return newStr == '' ? true : rightSequence(newStr);
}
console.log(rightSequence('[{[({})]({})}()[{{}}([{}])]]'));//--->true
console.log(rightSequence('[{[({})]]}({})}]'));//--->false