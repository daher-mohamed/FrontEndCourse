const trigger = document.getElementById('triggerPromise');
const checkBox = document.getElementById('triggerRejection');
const massegeList = document.getElementById('message');
function promisFun(){

    //creating a promise
    const promise = new Promise((resolved, rejected) => {
        setTimeout(()=>{
            if(checkBox.checked){
                rejected("The Promise has been rejected!")
            }else{
                resolved("The Promise has been resolved!")
            }
        },1000)
    })

    promise
        .then((msg) =>{
            massegeList.textContent = msg
            massegeList.classList.add('resolved')
            massegeList.classList.remove('rejected')
        })
        .catch((err) =>{
            massegeList.textContent = err;
            massegeList.classList.add('rejected');
            massegeList.classList.remove('resolved');
        })
}
trigger.addEventListener('click',promisFun);