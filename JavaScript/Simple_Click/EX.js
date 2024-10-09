const clickMe = document.getElementById("clickButton");
const id  = document.getElementById("counter");
let counter = parseInt(id.textContent, 10);
clickMe.addEventListener('click', ()=>{
    counter = counter + 1;
    id.textContent = counter;
})