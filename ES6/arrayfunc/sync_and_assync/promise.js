let gotomv=(success,failure)=>{
    let acc_bal=12000;
    if (acc_bal>10000){
        success('go to mv and watch')
    }
    else{
        failure('go to home and watch in TV')
    }
}
gotomv((msg)=>{console.log(msg);},(err)=>{console.log(err);})



//creating a new array based on the existing array.
let enames=["shyam","nandu","vishnu","harika"]
let new_names=[]
for(let ename of enames){
    new_names.push(ename)
}
console.log(enames);
console.log(new_names);