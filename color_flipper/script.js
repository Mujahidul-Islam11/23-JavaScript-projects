const colors = ["red", "green", "rgba(133, 122, 200)", "#f10525", "#ff80ed"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", ()=>{
    const randomNumber = Math.floor(Math.random(0) *colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
