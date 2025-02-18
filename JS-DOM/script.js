let para= document.getElementById('count')
console.log(para.textContent) //0
let c = para.textContent;

function incr ()
{
    c++;
    para.textContent = c;
}
function decr() {
	c--
	para.textContent = c
}
