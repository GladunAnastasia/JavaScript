function BinToDec(number) {
	number = String(number);
	if(!rightNumber(number)) {
		return;
	}
	let result = 0;
	number.split('').forEach(function(value, index) {result += value * Math.pow(2,Math.abs(index-(number.length-1)))});
	return result;
}
function rightNumber(number) {
	for(let i = 0; i < number.length; i++) {
		if(number[i] != '0' && number[i] != '1') {
			return false;
		}
	}
	return true;
}