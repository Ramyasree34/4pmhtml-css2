// const iputEle = document.getElementById('na')
// const para= document.getElementById('para')
// function fun ()
// {
//     console.log("hello world")
// }
// document.getElementById('btn1').addEventListener('click', fun)
// document.getElementById('btn2').addEventListener('click', function ()
// {
//     console.log("hello world")
// })
// function makeInput ()
// {
//     para.textContent=iputEle.value
// }
// function makeInput2() {
// 	para.textContent = document.getElementById("choice").value
// }
// let a = 20, b = 30;
// document.body.onkeydown = function (e)
// {
//     console.log(e)
//     if (e.key == 'a')
//     {
//         console.log("addition is "+(a+b))
//     }
//     else
//     {
//             console.log("press a for addition")
//     }
// }

document.getElementById('c').addEventListener('click', function ()
{
    alert("c got clicked")
},true)
document.getElementById("p").addEventListener("click", function (e) {
    alert("p got clicked")
},true)
document.getElementById("gp").addEventListener("click", function () {
	alert("gp got clicked")
},true)



document.getElementById('buttons').addEventListener('click', function (e)
{
    console.log("you clicked "+e.target.textContent)
})