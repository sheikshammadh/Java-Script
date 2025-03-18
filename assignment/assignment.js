//program to check if a number is divisible by 7 or not?

/*let value=49;
if (value%7==0){
    console.log(value," is divsible by 7")
}
else{
    console.log(value,"is not divisible by 7");
}
*/
// ===============================================================================
//program to check if a number is multiple of 3 or not?

/*let value=31;
if (value%3==0){
    console.log("multiple of 3");
}
else{
    console.log("not multiple of 3");
}
*/
// ==========================================================================================
//program to check if a number is positive or not?
/*
let value=-10;
if(value>=0){
    console.log(value,'is a positive number');
}
else{
    console.log(value,'is not a opsitive number');
}
*/
// =====================================================================================================
// program to check if a number is 3-digit numbers or not?

/*let value=12;
if(value>=100){
    console.log(value,"is a three digit number");
}
else{
    console.log(value,"not a three digit number");
}
*/
// =====================================================================================================
//program to print even or odd for a given number?
/*
let value=1990;
if (value%2==0){
    console.log(value,"is a even number");
}
else{
    console.log(value,"is a odd number");
}
*/
// =======================================================================================================
//program to print the greatest number in given two numbers?
/*
let value1=12;
let value2=123;
if (value1>value2){
    console.log(value1,'is greater than value2');
}
else{
    console.log(value2,'is grater than value1');
}
*/
// =======================================================================================================
//program to print the least number given two numbers?

/*
let value1=12;
let value2=123;
if (value1<=value2){
    console.log(value1,'is least number');
}
else{
    console.log(value2,'is least number');
}
*/
// ==========================================================================================================
//program to print the greatest number in given three numbers?
/*
let value1=1234;
let value2=123456789;
let value3=1234567;
if(value1>value2){
    console.log(value1);
}
if (value2>value3) {
    console.log(value2);
} else {
    console.log(value3);
}
*/
// ================================================================================================================
//program to print the least number in given three numbers?
/*
let value1 = 123;
let value2 = 12345;
let value3 = 123456789;

if (value1 < value2 && value1 < value3) {
    console.log(value1, 'is the least number');
} else if (value2 < value1 && value2 < value3) {
    console.log(value2, 'is the least number');
} else {
    console.log(value3, 'is the least number');
}
*/
// =======================================================================================================================
// Program to print the given 3 numbers in ascending order
/*
let value1 = 1234444;
let value2 = 12345;
let value3 = 1234567892345678;

if (value1 > value2) {
    [value1, value2] = [value2, value1];
}
if (value2 > value3) {
    [value2, value3] = [value3, value2];
}
if (value1 > value2) {
    [value1, value2] = [value2, value1];
}
console.log(value1, value2, value3);
*/
// =========================================================================================================================
//Program to print the given 3 numbers in descending order.
/*
let value1 = 1234444;
let value2 = 123453456789;
let value3 = 123;

if (value1 < value2) {
    [value1, value2] = [value2, value1];
}
if (value2 < value3) {
    [value2, value3] = [value3, value2];
}
if (value1 < value2) {
    [value1, value2] = [value2, value1];
}
console.log(value1, value2, value3);
*/
// ==============================================================================================================================
// JavaScript Program to Find the Largest of Three Numbers

function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
let a = 25, b = 42, c = 39;
let largest = findLargest(a, b, c);
console.log(`The largest number is: ${largest}`);
