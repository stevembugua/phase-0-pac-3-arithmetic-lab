let number = 10;

function add() {
  return (number += 5);
}

function divide() {
  return (number /= 3);
}

function multiply(){
    return (number*=2)
}
function subtract(){
    return(number-=2)
}
function subtract(a,b){
    return(a-b)
}
function multiply(a,b){
    return(a*b)
}
function add(a,b){
    return(a+b)
}
function divide(a,b){
    return(a/b)
}
function increment(a){
    return (a+1)
}
function decrement(a){
    return (a-1)
}
function makeInt(n){
    return n.toString()
}
makeInt()
function preserveDecimal(n){
    return n.toString()
}
function preserveDecimal(n){
    return parseFloat(n)
}
function makeInt(n){
    return parseInt(n,10)
}
