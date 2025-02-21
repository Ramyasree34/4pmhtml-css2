let newword = ["java", "python","javascript","html","React"];
let sub_container = document.getElementById("sub-container");
let scramble_word = document.getElementById("scramble_word");
let result = document.createElement("h2");
sub_container.appendChild(result);

let index;
let display_word;

function refresh() {
    index = Math.floor(Math.random() * newword.length);
    display_word = newword[index]; 

    let arr = display_word.split("");

    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i]; 
        arr[i] = arr[j];   
        arr[j] = temp;   
    }

    scramble_word.innerHTML = arr.join(" ").toUpperCase();
    document.getElementById("input_string").value = "";
    result.textContent = ""; 

   
}


function submit() {
    let input_str = document.getElementById("input_string").value.trim().toLowerCase();

    if (!input_str) {  
        alert("Please guess the word!");  
     
        return; 
    }

    if (input_str === display_word) {
        result.textContent = `You guessed it correct! 🎊`;
        result.style.color = "green"; 
    } else {
        result.textContent = `You guessed it wrong 😔`;
        result.style.color = "red";
    
}

}

refresh(); 
