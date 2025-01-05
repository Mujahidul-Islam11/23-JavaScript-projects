const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", ()=>{
    let hexColor = "#";
    for(var i = 0; i<6; i++){
        let randomNumber = Math.floor(Math.random(0) * hex.length);
        hexColor+= hex[randomNumber];
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor;
})