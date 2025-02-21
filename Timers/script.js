const para = document.getElementById('count');
let c = 0;
// setTimeout(function ()
// {
//     console.log("hi")
//     c++;
//     para.textContent=c
// }, 0)
let myTime=setInterval(function () {
	console.log("hi")
	c++
    para.textContent = c
    if (c == 100)
    {
        clearInterval(myTime)
    }
}, 10)
for (let i = 0; i < 1000; i++)
{
    console.log("hello world")
}