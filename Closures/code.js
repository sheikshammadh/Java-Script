// function outerfunction(){
//     let a="hi"
//     return function innerfunction(){
//         console.log(a)
//     }
// }
// const mfunction=innerfunction();
// mfunction();
// function myaccount(defaultbalance){
//     let balance=defaultbalance;
//     return{
//         deposit:function (amount){
//             balance+=amount;
//             console.log(`Deposited ${amount}. New balance is ${balance}`);
//         }
//         withdraw:function(amount){
//             if (amount<balance){
//                 console.log("insufficient funds");
//             }else{
//                 balance-=amount;
//                 console.log(`Withdrawn ${amount}. New balance is ${balance}`);
//             }
//         }
//         getbalance:function(){
//             return balance;
//             console.log("remaining balance is",balance);

//         }   

//     }

// }
// const myaccount1=myaccount(1000);
// myaccount1.deposit(500);
// myaccount1.withdraw(200);
// myaccount1.getbalance();

// function outerFunction(){
//     let a="hi"
//     return function innerFunction(){
//         return console.log(a)
//         }
//     }
// const infunct=outerFunction()
// infunct();

function count(){
    let count=0;
    return function counts(){
        count++;
        console.log(count);
    }
}
const counter=count()
counter()
counter()
counter()
counter()