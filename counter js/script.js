const paraCount = document.getElementById('count')
let c = paraCount.textContent; //c=0
function incr ()
{
    c++; //1
    paraCount.textContent = c;
}
function decr() {
    c--;
	paraCount.textContent = c
}
function reset ()
{
    c = 0;
    paraCount.textContent = c
}
let colors = ["red", "blue", "yellow", "green", "orange", "pink", "purple"];
function change ()
{
    const rIndex = Math.round(Math.random() * 10000000).toString(16)
     document.body.style.backgroundColor='#'+rIndex  
}
const inp= document.getElementById('inp')
function inputChange ()
{
    document.getElementsByClassName('btn')[0].style.backgroundColor = inp.value;
    document.getElementsByClassName("btn")[1].style.backgroundColor = inp.value;
    document.getElementsByClassName("btn")[2].style.backgroundColor = inp.value;

}
function changeMode ()
{
    document.body.classList.toggle("dark")
}