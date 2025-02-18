const ele = document.getElementById('x')
const i = document.getElementById('image')
 console.log(ele.textContent)
console.log(ele.innerText)
const p = document.getElementById('para')
const inp = document.getElementById('na');
function change ()
{
    console.log(inp.value);
    p.innerHTML = `<b>hiiii</b>`;
    p.style.backgroundColor="red"
    ele.textContent = "bye";
    i.src =
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1irakm2XKD0xniYh-97QAtfcJURglitNMCA&s"
}