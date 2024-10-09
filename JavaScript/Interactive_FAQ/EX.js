const fq1 = document.getElementById("faq1")
const ansq1 = document.getElementById("faq1-answer");
const ansq2 = document.getElementById("faq2-answer");
const ansq3 = document.getElementById("faq3-answer");
const fq2 = document.getElementById("faq2");
const fq3 = document.getElementById("faq3");
fq2.style.height = '18px';
fq3.style.height = '18px';
fq1.style.height = '18px';
ansq1.style.visibility = 'hidden';
ansq2.style.visibility = 'hidden';
ansq3.style.visibility = 'hidden';
fq1.addEventListener('click',() => {
    ansq1.style.visibility = 'visible';
    ansq2.style.visibility = 'hidden';
    ansq3.style.visibility = 'hidden';
    fq2.style.height = '18px';
    fq3.style.height = '18px';
    fq1.style.height = '32px';

})
fq2.addEventListener('click',() => {
    ansq2.style.visibility = 'visible';
    ansq1.style.visibility = 'hidden';
    ansq3.style.visibility = 'hidden';
    fq1.style.height = '18px';
    fq3.style.height = '18px';
    fq2.style.height = '32px';
    
})
fq3.addEventListener('click',() => {
    ansq3.style.visibility = 'visible';
    ansq2.style.visibility = 'hidden';
    ansq1.style.visibility = 'hidden';
    fq2.style.height = '18px';
    fq1.style.height = '18px';
    fq3.style.height = '32px';
    
})