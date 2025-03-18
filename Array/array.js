// let emp=[101,102,102,"shyam","nandu",[],true,{}]
// let employee=[]
// let uids=[101,102,103,104,12,324,32412435]

// console.log(emp)
// /*            [
//                 101,     102,
//                 102,     'shyam',
//                 'nandu', [],
//                 true,    {}
//               ]
// */
// console.log(typeof(emp))//object
// console.log(emp[0]);//101
// console.log(emp[1]);//102
// console.log(emp[2]);//shyam
// console.log(emp[3]);//nandu
// console.log(emp[4]);//[]
// console.log(employee)//[]
// console.log(typeof(employee));//object
// console.log(uids);//[ 101, 102, 103, 104 ]

// let i=0;
// while(i<=5){
//     console.log(uids[i]);
//     i++;
// }

// for(uid in uids){
//     console.log(uid);
// }

enames=['shyam','nandu','vishnu','harika']
for(ename in enames){
    console.log(ename)
}