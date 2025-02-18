function fun ()
{
	// const para = document.createElement("p") // <p></p>
	// para.textContent = "hello" //<p>hello</p>
    // document.body.appendChild(para) //<body><p>hello</p></body>
    const image = document.createElement('img');
    image.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8-aGCVQm9-hpU01sGMfFQSFzdqssHWU5Rg&s"
    image.height = "200";
    image.alt="saitama"
    const title = document.createElement('h2')
    title.textContent = "One Punch Man"
    const card = document.createElement('div')
    card.append(image, title);
    document.body.appendChild(card)
    
}