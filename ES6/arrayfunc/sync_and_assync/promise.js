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
