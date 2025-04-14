//creating new array based on excisting array.
let enames=['shyam','nandu','vishnu','harika','amar','ganta']
// console.log(enames);
// let enames1=[...enames]
// console.log(enames1)

let new_enames=[]
for(ename of enames){
    new_enames.push(ename)

}
console.log(enames);
console.log(new_enames);

let neww_enames=enames.map((ename)=>{
    return ename
})
console.log(enames);
console.log(new_enames);



// let neww_enames=enames.map((ename)=>{
//     return ename
// })
