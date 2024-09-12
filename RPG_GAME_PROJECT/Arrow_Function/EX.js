console.log("EX1");
let player = {name : "name"}
let value = (player)=>player.name;

console.log("EX2");
let getPlauerHealth = (health)=>{health > 70 ? "High" : health > 40 ? "medium" : "low"};

console.log("EX3");
let getTotalInventory = (items)=>{return items.reduce((acc,item)=>{
    acc += item;
    return acc;
},0)};

console.log("EX4");

let items = [1,4,6,2,3];
let sortedItems = (items) =>{ return items.sort((a,b) => {return a - b})};

console.log("EX5");
let ans = (items)=>{return items.map((item)=>{return item})};




