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
console.log(getTheMostPopularWord('Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut lacinia egestas nunc nibh iaculis est convallis tincidunt mi mi sed \nnisl Sed porttitor aliquam elit ullamcorper tincidunt arcu euismod quis Mauris congue elit suscipit leo varius facilisis Cras et arcu sodales laoreet \nest vitae pharetra orci Integer eget nulla dictum aliquet justo semper molestie neque Maecenas bibendum lacus tincidunt auctor varius purus felis \nullamcorper dui et laoreet ligula ex et risus Donec eget fringilla nibh Cras congue tincidunt accumsan Maecenas euismod eleifend elit ut rhoncus tortor \nsodales a Cras egestas finibus lorem non tempor tincidunt aera\n                                                              '));
//---> ["tincidunt"]
console.log(getTheMostPopularWord('000 123 234 345 000 234 000 234 000 234 123 123 123 098 987 876               \n                             '));
//---> ["000", "123", "234"]