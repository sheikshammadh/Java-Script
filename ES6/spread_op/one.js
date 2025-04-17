// what is sproead operator?
// extrac and copy.
// spread operator is applicable for both array and object.
//     1.create a new object or Array.
//     2.merge Array or Object
//     3. extending array element/Object properties.

//merge array element using spread operator.
// let a=[1,2,3,4,5]
// let b=[5,6,7,8,9]
// let c=[...a,...b]
// console.log(c);

//extending array by using spread.
// let aa=[10,20,30,40,50]
// let bb=[20,30,40,50,60]
// let cc=[...aa,...bb,90,100,101,102]
// console.log(cc);

// let emp={
//     eid:101,
//     ename:'sn',
//     esal:456789,
//     email:"sdfgh@gmail.com"
// }
// let details={
//     email:"sdfghj@gmail.com",
//     loc:"bangalore"
// }
// let emp_details={...emp,...details}
// console.log(emp_details);
//object doesnt allowed duplicate keys/properties.

function add(a,...b){
    console.log("a value",a,"and b value",b);
}
add(10,20)
add(10,20,30)
add(10,20,30,40)
add(10,20,30,40,50)
add(10,20,30,40,50,60)
add(10,20,30,40,50,60,70)


