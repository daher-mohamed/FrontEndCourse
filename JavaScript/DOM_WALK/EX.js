console.log("EX1 change the title from title2 -> main title");
const myLi = document.querySelector('li.start-here');
console.log(myLi);
myLi.textContent = 'main title';

console.log("EX2 Add a new item in ul");
const myLiNextSibling = myLi.nextElementSibling;
const myui = myLiNextSibling.firstElementChild;
console.log(myui);

const newSubTitle = document.createElement('li');
const subTitleText = document.createTextNode('sub title 4');
newSubTitle.appendChild(subTitleText);
myui.appendChild(newSubTitle);

console.log("remove the last element");
const myLiParent = myLi.parentElement;
myLiParent.lastElementChild.remove();

console.log("change the hrad title");
const head = document.head;
const title = head.querySelector('title');
title.textContent = 'Dom Master';

console.log("Update the p");
const div = myLiParent.nextElementSibling;
const p = div.firstElementChild;
p.textContent = 'Now I know how to traverse the Dom :D :)'
