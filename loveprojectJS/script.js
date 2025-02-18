function calculateLove() {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;

    

    const loveScore = Math.floor(Math.random() * 101); 
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `${name1} and ${name2} have a love compatibility of ${loveScore}%!`;
}