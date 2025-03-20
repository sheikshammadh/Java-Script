// function login(){
//     console.log('login success');
// }
// login()
// login()

// function add(a,b,c){
//     console.log(a+b+c);
// }
// add(1213,143,14)//1370
// add(10,31)//NaN  unable to perform +,-,*, concatenation
// add(123)//NaN   unable to perform +,-,*, concatenation

function add(a,b,c=10){
    console.log(a+b+c);
}
add(1213,143,14)//1370
add(10,31)//51
add(123)//NaN   unable to perform +,-,*, concatenation