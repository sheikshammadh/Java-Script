// let p_tag_reference=document.getElementsByTagName('p')[0]
// console.log(p_tag_reference);
// p_tag_reference.innerHTML='good morning'

// let p_tag_reference=document.getElementsByTagName('p')[0]
// console.log(p_tag_reference);
// p_tag_reference.innerHTML=new Date().toLocaleTimeString()//for standard time no change until the refreshing.

// setTimeout(()=>{console.log('gm')},4000)//for every 4 sec.

// setInterval(()=>{
//     console.log('gm');
// },1000)

setInterval(()=>{
    let p_tag=document.getElementsByTagName('p')[0];
    p_tag.innerHTML=new Date().toLocaleTimeString()//time
    // p_tag.innerHTML=new Date().toLocaleDateString()//date
},1000)
