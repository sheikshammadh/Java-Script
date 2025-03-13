/* 
primitives:
number
string
bool
undefined
bigint
null
symbol***
non-primitives:
both array and object are belongs to non-primitives.
array:
group of individual elements. 
Object:
group of key value pairs.
*/
// Array:

let eid=[101,102,103,104,105]
let sizes=[28,29,30,31,32,33]
console.log(typeof(eid))//object
console.log(typeof(sizes))//object

// object:
let specific={}
let emp={
    'eid':101,
    'ename':'shyam',
    'esal':45000.45
}
console.log(typeof(specific))//object
console.log(typeof(emp))//object
