const taskInput = document.getElementById('taskInput');
const mainDiv = document.getElementById('main')
let todos = [];
function addTask ()
{
    todos.push({
        task: taskInput.value,
    });
    displayData()
}
function displayData ()
{
    mainDiv.textContent=''
    todos.forEach((t,ind) =>
    {
        const div = document.createElement("div")
		div.classList.add("task")
		const taskName = document.createElement("p")
		taskName.textContent = t.task
		const button = document.createElement("button")
        button.textContent = "❎"
        button.onclick = function ()
        {
            const res = confirm("do you want to delete?")
            if (res)
            {
                todos.splice(ind, 1);
                alert("😭, you deleted a wish")
				displayData()
            }
        }
				div.append(taskName, button)
        mainDiv.appendChild(div);
           taskInput.value=''
    })
}