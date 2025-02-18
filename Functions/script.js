//IIFE
;(function () {
	let generateId = Math.round(Math.random() * 100000)
	console.log("ur id is " + generateId)
	// secret keys
})()


// function to print hello world
function display ()
{
  console.log("hello world")   
}
display() //call
display()
// function with parameters
function displayName (n)
{
    console.log(`Welcome to ${n}`)
}
displayName("raj");
// multiple parameters
function add (a,b=10,c)
{
    console.log(a+c)
}
add(2, 3)
add("raj", "shekhar")
add(2, 5, 6)
add(1)
add("raj")

// functions can returns the values
let x=(a, b)=> a * b;
let res = mul(5, 4)
console.log(res);
console.log(mul)





// In js, functions are also treated as a variable
function simple () //normal function
{
    console.log("prasad")
}
let z = function () //function expression
{
    console.log("prasad"); 
};
console.log(simple, z)
let z1 = () => console.log("prasad") //arrow functions
z()
z()


//  function  to add two numbers and print result
// normal function
function add2 (a, b)
{
    console.log(a + b);
}
add2(5, 3);
console.log(add2)
// function expression
let add3 = function (a,b)
{ 
    console.log(a + b); 
}
console.log(add3)
add3(5, 3)
let add4 = (a,b) => console.log(a + b)
console.log(add4)
add4(5,3)

// callback functions
function mad() {
	console.log("i'm mad")
}
function bad() {
	console.log("i'm bad")
}
function fun(a, b) {
	a()
	b()
}
fun(mad, bad) 
// mad and bad are passed as a parameter to another function
// so they are called callback functions
// fun received functions as a parameters, so fun is called
//Higher order function

function incr (a)
{
    return a++;
}
function logic (a, b)
{
    console.log(b)
    let x = a + b(5);
    console.log(x)
}
logic(2,incr)
// function addToCart
// function CartPage(addTocart)
// function checkout(cartPage)


function add (a, b)
{
    console.log(a+b)
}
function sub (a, b)
{
    console.log(a-b)
}
function mul (a, b)
{
    console.log(a*b)
}
function div (a, b)
{
    console.log(a / b);
}
function calculator (a, b, c, d)
{
    a(2, 4); 
}
calculator(add, sub, mul, div);



// closure
function outer ()
{
    var x = 25;   
    function inner ()
    {
        x++;
        console.log(x)
    }
    return inner;
}
let result = outer();
console.log(result) // complete inner function
result();
result();