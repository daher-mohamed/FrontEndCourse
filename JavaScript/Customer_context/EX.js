const menu = document.getElementById("contextMenu");
const viewD = document.getElementById("viewDetails");
const copy = document.getElementById("copyText");

document.addEventListener("context-menu", (e)=>{
    e.preventDefault();
    menu.style.top = `${e.pageY}px`;
    menu.style.left = `${e.pageX}px`;

    menu.classList.remove("context-menu");
})

document.addEventListener('click', ()=> {
    if (!menu.classList.contains('context-menu')) {
        menu.classList.add('context-menu');
    }
});
viewD.addEventListener('click', ()=> {
    alert('View Details');
    menu.classList.add('context-menu'); 
});
copy.addEventListener('click', ()=> {
    alert('Copy Text!');
    menu.classList.add('context-menu');
});