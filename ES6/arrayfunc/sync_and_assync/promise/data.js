let employees=[
    {eid:101,ename:'rg',esal:45000},
    {eid:102,ename:'sg',esal:55000},
    {eid:103,ename:'dg',esal:65000}
]
let create_empl=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag=true;
            flag===true ? resolve("data inserted"):reject("failed")
            employees.push(emp)
        },4000)
    })
}
let display_empl=()=>{
    setTimeout(()=>{
        let rows="";
        employees.forEach((emp)=>{
            rows+=`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                  </tr>`
        })

        
        
    },1000)
}
create_empl().then().catch()