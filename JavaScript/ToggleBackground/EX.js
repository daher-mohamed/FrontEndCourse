const toggle = document.getElementById('toggleButton')
const body = document.body
toggle.addEventListener("click", e=>{
    body.classList.toggle('dark');
})