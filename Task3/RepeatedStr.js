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