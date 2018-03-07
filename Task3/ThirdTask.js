// ЕЩЕ БУДУ ПРОВЕРЯТЬ!

//Самое популярное слово
//Возвращает массив с самым часто повторяющимся или с самыми часто повторяющимия словами(если количество их повторений равны). 
function getTheMostPopularWord(str) {
    let array = str.split(' ');
    let resultArray = [];
    let count = 0;
    let element;    
    for(let i = 0; i < array.length; i++) {
        if(!array[i]) {
            continue;
        }
        let j = i + 1;
        let tempCount = 0;
        let inx;
        while((inx = array.indexOf(array[i], j)) >= 0) {
            j = inx;
            array[j] = undefined;
            tempCount++;
        }
        if(tempCount >= count) {
            if (tempCount > count) {
                resultArray.length = 0;
            }
            count = tempCount;
            element = array[i];
            resultArray.push(element);
        } 
        array[i] = undefined;
    }
    return resultArray;
}
console.log(getTheMostPopularWord('Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut lacinia egestas nunc nibh iaculis est convallis tincidunt mi mi sed \nnisl Sed porttitor aliquam elit ullamcorper tincidunt arcu euismod quis Mauris congue elit suscipit leo varius facilisis Cras et arcu sodales laoreet \nest vitae pharetra orci Integer eget nulla dictum aliquet justo semper molestie neque Maecenas bibendum lacus tincidunt auctor varius purus felis \nullamcorper dui et laoreet ligula ex et risus Donec eget fringilla nibh Cras congue tincidunt accumsan Maecenas euismod eleifend elit ut rhoncus tortor \nsodales a Cras egestas finibus lorem non tempor tincidunt aera\n                                                              '));//---> ["tincidunt"]
console.log(getTheMostPopularWord('000 123 234 345 000 234 000 234 000 234 123 123 123 098 987 876               \n                             '));//---> ["000", "123", "234"]

//Строка — повторение подстроки
function getCountRepeatSubstring(str) {
    if(!str.trim()) {
        return;
    }
    let result = '';
    for(let i = 0; i < str.length; i++){
        result = result + str[i]
        let array = str.split(result)
        if (array.every(function(x){return x == ''})){
            return array.length - 1;
        }   
    }
}
console.log(getCountRepeatSubstring("abcabcabcabc"));//---> 4
console.log(getCountRepeatSubstring("qwerghjkqwerghjkqwerghjkqwerghjkqwerghjk"));//---> 5
console.log(getCountRepeatSubstring("abcabcdabcgabb"));//---> 1
console.log(getCountRepeatSubstring("           "));//---> undefined

//Правильная скобочная последовательность
//Рекурсия
function rightSequence(str) {
    let input = ['{','[','('];
    let backInput = ['}',']',')'];
    let array = str.split('');
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < backInput.length; j++) {
            if(array[i] == input[j] && array[i + 1] == backInput[j]){
                array[i] = undefined;
                array[i + 1] = undefined;
            }
        }
    }
    let newStr = array.join('');
    if(str == newStr){
        return false;
    }
    return array.join('') == '' ? true : rightSequence(array.join(''));
}
console.log(rightSequence('[{[({})]({})}]'));