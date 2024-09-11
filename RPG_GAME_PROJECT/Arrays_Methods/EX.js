console.log("EX1");
//Checks
const weaponInventory = ["Sword", "Bow", "Magic Staff"];
if(weaponInventory.includes("Sword")){
    console.log("The value is in the weapon inventory");
}else{
    console.log("The value is not in the weapon inventory");
}
console.log("EX2");
//reverse
const questNames = ["Dragon's Lair", "The Lost Artifact", "Rescue the Princess"];
const reverseArray = questNames.reverse();
for(let i = 0; i < reverseArray.length; i++){
    console.log(reverseArray[i]);
    
}
console.log("EX3");
const monstarTypes = ["Dragon", "Goblin", "Orc"];
let value = "";
// 
monstarTypes.map(type => value = value + type + " ");
console.log(value);

console.log("EX4");
const monster = ["Dragon", "Goblin", "Orc"];
if(weaponInventory.includes("Orc")){
    console.log("The value is in the weapon inventory");
}else{
    console.log("The value is not in the weapon inventory");
}
console.log("EX5");
const names = ["Dragon's Lair", "The Lost Artifact", "Rescue the Princess"];
let index = names.indexOf("Rescue the Princess");
console.log(index != -1 ? ("Rescue the Princess found at index %d",index) : "Quest not found");

console.log("EX6");
let monsterList = ["Orc", "Goblin"];
monsterList.pop();
monsterList.map(monster => console.log(monster));

console.log("EX7");
let monsterList1 = ["Orc", "Goblin"];
monsterList1.unshift("Dragon");
monsterList1.map(monster => console.log(monster));

console.log("EX8");
const val = monsterList1.shift();
console.log(val);

console.log("EX9");
let heroList1 = ["Archer", "Mage"], heroList2 = ["Warrior", "Healer"];
heroList1 = heroList1.concat(heroList2);
heroList1.map(val=> console.log(val));

console.log("EX10");

names.sort();
names.map(val=> console.log(val));

console.log("EX12");
const new_Names = names.slice(0, 2);
new_Names.map(val=> console.log(val));

console.log("EX13");
let m = ["Dragon", "Orc", "Goblin"];

for(let i=0; i<m.length; i++){
    m.pop();
}
console.log("EX14");
let weapon = ["sword", "Shield"];
const new_Weapon = "Bow";
weapon.push(new_Weapon);
console.log("EX15");
let inventory = ["Gold", "Magic Potion", "Shield"];
inventory.pop();
inventory.map(val=> console.log(val));
console.log("EX16");
let quest = ["Dragon's Lair", "Rescue the Princess"];
quest.unshift("Defeat the Goblin King");
quest.map(val=> console.log(val));
console.log("EX17");
quest = ["Dragon's Lair", "Rescue the Princess", "Defeat the Goblin King"];
quest.sort();
quest.map(val=> console.log(val));
console.log("EX18");
if(weaponInventory.includes("Rescue the Princess")){
    console.log("The value is in the quest :)");
}else{
    console.log("The value is not in the quest :(");
}
console.log("EX19");
let scores = [30, 80, 60 , 90];
scores.sort((a, b) => b - a);
scores.map(val => console.log(val));

