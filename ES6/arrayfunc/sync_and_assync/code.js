// console.log("request1");
// console.log("request2");


// setTimeout(()=>{console.log("request1");},5000)//executing after 5sec
// setTimeout(()=>{console.log("request2");},3000)//executing after 3sec
// setTimeout(()=>{console.log("request3");},1000)//executing after 1sec
// setTimeout(()=>{console.log("request4");},2000)//executing after 2sec


// let calc=(a,b,op)=>{
// if(op==="sum"){
//     return a+b;
// }
// if(op==="multi"){
//     return a*b
// }
// }
// let r1=calc(10,20,"sum")
// let r2=calc(10,20,"multi")
// console.log(r1);//30
// console.log(r2);//200

// let sum=(a,b)=>{
//     return a+b
// }

// let multi=(a,b)=>{
//     return a*b 
// }
// let calc=(a,b,callback)=>{
//     return callback(a,b)   
// }
// let r1=calc(10,20,sum)
// let r2=calc(10,20,multi)
// console.log(r1);
// console.log(r2);


// =====================================================================================================================================


// let calc=(a,b,op)=>{
//     if(op==="sum"){
//         return a+b;
//     }
//     if(op==="multi"){
//         return a*b
//     }
//     if(op==="callback"){
//         return callback(a,b)
//     }
//     }
//     let r1=calc(10,20,"sum")
//     let r2=calc(10,20,"multi")
//     console.log(r1);//30
//     console.log(r2);//200

// ==================================================================================================================
//iterate and go with the function use for each

// let marks=[10,20,30,40,50]
// let new_marks=marks.map((marks)=>{
//     return marks+1
// })
// console.log(marks);
// console.log(new_marks);

// ===============================================================================================================================
// let emp=[
//     {eid:100,ename:'shyam',esal:45000},
//     {eid:101,ename:'nandu',esal:55000},
//     {eid:102,ename:'vishnu',esal:65000},
//     {eid:103,ename:'harika',esal:75000}
// ]
// let create_emp=()=>{
//     setTimeout(()=>{
//         emp.push(emp)
//     },4000)
// }
// let disp_emp=()=>{
//     setTimeout(()=>{
//         let rows=''
//         for(let empl of emp){
//             rows=rows+`<tr>
//                         <td>${employee.eid}</td>
//                         <td>${employee.ename}</td>
//                         <td>${employee.esal}</td>
//                      </tr>`
//         }
       

//     document.getElementById('tdata').innerHTML=rows
//     },2000)


// }
// create_emp({eid:104,ename:'amar',esal:85000})
// disp_emp()


let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000}
]
let createEmployee=(emp)=>{
    setTimeout(()=>{
        employees.push(emp)
    },4000)
}

let displayEmployees=()=>{
    setTimeout(()=>{
        let rows=""
        for(let employee of employees){
            rows=rows+`<tr>
                        <td>${employee.eid}</td>
                        <td>${employee.ename}</td>
                        <td>${employee.esal}</td>
                     </tr>`
        }
        document.getElementById('tData').innerHTML=rows
        //document.getElementById('tData').innerHTML="GM"
    },1000)
}

createEmployee({eid:103,ename:"Priyanka",esal:65000})
displayEmployees()

