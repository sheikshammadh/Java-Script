// function login(){
//     console.log('login success');
// }
// login()
// login()
// ==============================================================================================================
// function add(a,b,c){
//     console.log(a+b+c);
// }
// add(1213,143,14)//1370
// add(10,31)//NaN  unable to perform +,-,*, concatenation
// add(123)//NaN   unable to perform +,-,*, concatenation
// ===============================================================================================================
// function add(a,b,c=10){
//     console.log(a+b+c);
// }
// add(1213,143,14)//1370
// add(10,31)//51
// add(123)//NaN   unable to perform +,-,*, concatenation
// ===============================================================================================================
// function add(a,b){
//     console.log(a+b)
//     console.log(a);
//     console.log(b)
// }
// add(10,10)
// /*
// 20
// 10
// 10
// */
// add(20,50)
// /*
// 70
// 20
// 50
// // */
// ===================================================================================================================
// function add(a,b){
//     let n1=100
//     return a+b+n1
// }
// let s1=add(100,200)
// console.log(s1);//400
// ====================================================================================================================
/*
function my_age(dob){
    let yr=2025;
    return yr-dob;
}
let age1=my_age(2003)
console.log(age1)
let age2=my_age(2002)
console.log(age2)
*/
// ======================================================================================================================
/*
let dt=new Date()
console.log(dt)//print cdt;

let ct = new Date().toLocaleTimeString()
console.log(ct)//print current time
console.log(typeof ct)  //String

let current_Year = new Date().getFullYear()
console.log(current_Year)  //2025  //print current year

let current_Date = new Date().toLocaleDateString()
console.log(current_Date)//print current date-only
*/
// ====================================================================================================================
/*
function cal_Age(dob_Year){
    
    let cy = new Date().getFullYear()//let cy = 2025;
    return cy-dob_Year;//get the current year from date object
}
let age1 = cal_Age(2003)
console.log(age1)  //22
let age2 = cal_Age(2002)
console.log(age2)//23
*/
// ===============================================================================================================================
/*
function acc_bal(){
    return 1000000
    console.log('gm');// this is a un reachable bcz after return statement it not going to execute.
}
let bal=acc_bal()
console.log(bal);//1000000
*/
// ================================================================================================================================