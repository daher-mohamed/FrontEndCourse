function addField(){
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter value';
    console.log(input.value);
    const form = document.getElementById('dynamicForm')
    form.appendChild(input)
    
}

function submitForm(){
    const list = document.querySelectorAll('#dynamicForm input')
    let allFiled = true;
    let massege = "";
    list.forEach(l =>{
        allFiled = l !== null;
        massege += l.value.trim();
    })
    if(allFiled){
        alert("the values : " + massege);
    }
    else{
        alert("ther issomthing wrong :(,")
    }
}