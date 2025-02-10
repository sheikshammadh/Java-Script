// var a=[1,2,3,4,5,6,7,"shyam"];
// var b=a.filter(num => num % 2==0 );
// console.log(b)

var a=[1,2,3,4,5,6,7,"shyam"];
var b=a.filter(num => typeof num=="string" || num %2 ===0);
console.log(b);.