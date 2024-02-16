const btn = document.querySelector("button");
const body = document.body;
const h1 = document.querySelector("h1");

btn.addEventListener("click", function(){
    const newColor = randomColor();
    body.style.backgroundColor = newColor;
    h1.textContent = newColor;
})

function randomColor(){
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;

    if(r < 80 && g < 80 && b < 80){
        h1.style.color = "white";
    }

    return `rgb(${r}, ${g}, ${b})`;
}