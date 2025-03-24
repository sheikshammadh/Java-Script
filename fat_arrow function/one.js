// let a=100;
// function add(){
//     console.log('addition');
// }
// add()
// let b=100//number type
// let add=()=>{console.log('addition');} //add holding funtion type.
// add()//addition
// add()//addition
// function add(a,b){
//     console.log(a+b)
// }
// add(10,20)

// =================================================================================================================
// let add=(a,b)=>{console.log(a+b);}
// add(10,30)//40
// add(20,30)//50
// add(10)//NaN

// ==========================================================================================================
// function add(a,b){
//     return a+b
// }
// let r1=add(10,240)
// console.log(r1);
// let add=(a,b)=>{
//     return a+b
// }
// let r1= add (12,12)
// console.log(r1);

// ==============================================================================================================

// let add=(a,b)=>a+b//implicit return 

// let r1=add(10,23)
// let r2=add(10,2)
// let r3=add(1,23)
// console.log(r1);
// console.log(r2);
// console.log(r3);

// =================================================================================================================
// function add(a,b){
//     return a+b
// }
// let r1=add(10,29)
// console.log(r1);//39

// let add=(a,b)=>{
//     return a+b
// }
// let r1=add(1323,2132)
// console.log(r1);
// ==============================================================================================
// function wish(){
//     console.log(this);//this is a keyword called pointer pointing to current object.
// }
// wish() 
/* this ia object bcz curley braces.
<ref *1> Object [global] {
    global: [Circular *1],
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    structuredClone: [Getter/Setter],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    atob: [Getter/Setter],
    btoa: [Getter/Setter],
    performance: [Getter/Setter],
    fetch: [AsyncFunction: fetch]
  }
  */

//what is this keyword --oop
// class emp{}
// new emp()
// new emp()
// ======================================================================================================
// let wish=()=>{
//     console.log(this);
// }
// wish()
// ==================================================================================================
// function wish(){
//     console.log('gm');
// }
// wish()
// function wish(){
//     console.log('ge');
// }
// wish()
//oupute
// ge
// ge
// ge
// var wish=()=>{
//     console.log('gm');
// }
// wish()
// var wish=()=>{
//     console.log('ge');
// }
// wish()
// gm
// ge

// ===================================================================================================
// let cal_age=(DOB_YR)=>{
//     console.log();

// }
// cal_age()

// ===============================================================================================================================================================================================
// function get_discount(val){
//   return val+6
// }
// let discount=get_discount(5)
// console.log(discount);
// ---------------------------------------------------------------------------------------------------

// Adiition with fatarrow:

// let a=100
// let emp='shyam'
// let add=()=>{
//   console.log('addition');
// }
// add()//addition
// add()//addition

// let ad=function(){//this is not a fatarrow.
//   console.log('addition');
// }
// ad()//addition
// ad()//addition
// ===================================================================================================================
// let a=100
// let emp=101
// let add=()=>{
//   console.log('addition');
// }
// add()//addition
// add()//addition
// ==============================================================================================================================
//normal func:
// function add(shyam,nandu,bubu){
//   console.log(shyam+nandu+bubu);
// }
// add(10,20,30)

// FA func:
// let add=(a,b,c)=>{
//   console.log(a+b+c);
// }
// add(10,20,30)//60
// add(10,20,20)//50
// =====================================================================================================================

