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
	return number.split('').every(function(x){return x == '0' || x == '1'});
}