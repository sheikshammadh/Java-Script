// //this is a keyword.
// // it is a pointer.

// class Account{
//     main_bal=500;
//     Acc_bal=0;
//     Deposit_amount(amount){
//         this.Acc_bal=this.Acc_bal+amount
//     }
//     withdraw_amount(amount){
//         this.Acc_bal=this.Acc_bal-amount
//         if(this.Acc_bal<amount){
//             console.log("insufficient bal",amount);
//             }
//         else{
//             console.log("you can withdraw",amount);
//         }
//     }
//     get_balance(){
//         return this.Acc_bal-this.main_bal
//     }
       
// }
// let a1=new Account()//object creation
// a1.Deposit_amount(200)//invoking the method
// a1.Deposit_amount(100)
// a1.Deposit_amount(50)
// a1.withdraw_amount(500)
// a1.get_balance()
// console.log(a1);
// let a2=new Account()
// a2.Deposit_amount(50)
// a2.Deposit_amount(100)
// a2.Deposit_amount(200)
// a2.Deposit_amount(10)
// a2.withdraw_amount(500)
// a2.get_balance()
// console.log(a2);


// ==============================================================================================================
// Constrtuctor:
// it is a special method
// use to initialse the onbject values
// will execute only once at the time of object creation automatically.
// we cant invoke constructor method explicitly



// class Account{
//     constructor(){
//         console.log("constructor is a method");
//     }
//     deposit_amount(){
//         return console.log('amount deposited');
//     }
// }
// let a1=new Account()//constructor is a method
// let a2=new Account()//constructor is a method
// let a3=new Account()//constructor is a method

class Account{
    acc_id;
    acc_name;
    acc_bal;
    constructor(id,name,amount){
        this.acc_id=id
        this.acc_name=name
        this.acc_bal=amount
    }
    deposit_amount(amount){
        this.acc_bal+=amount
    }
    withdraw_amount(amount){
        this.acc_bal-=amount
    }
    get_balance(){
        return this.acc_bal
    }
}
let a1=new Account(101,"shyam",500)
a1.deposit_amount(10)
a1.withdraw_amount(100)
a1.get_balance()
console.log(a1.get_balance());
let a2=new Account(102,"nandu",500)
a2.deposit_amount(1000)
a2.withdraw_amount(100)
a2.get_balance()
console.log(a2.get_balance());
let a3=new Account(103,"vishnu",500)
a3.deposit_amount(100)
a3.withdraw_amount(20)
a3.get_balance()
console.log(a3.get_balance());


