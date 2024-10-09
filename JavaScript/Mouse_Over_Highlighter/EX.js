const paragraphs = document.querySelectorAll(".highlightable")

paragraphs.forEach((p)=>{
    p.addEventListener("mouseover",()=>{
        // p.classList.add('highlighted');
        p.style.backgroundColor = 'red'
    })
    p.addEventListener("mouseout",()=>{
        // p.classList.remove('highlighted');
        p.style.backgroundColor = ''
    })
})