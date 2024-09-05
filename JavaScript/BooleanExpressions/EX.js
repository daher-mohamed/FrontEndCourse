//1
const isSunny = true, isWeekend = false;
console.log("1");
console.log(isSunny && isWeekend);

//2
const age = 20, license = true;
console.log("2");
console.log(age > 18 && license);

//3
const KnowsJavaScript = false , KnowsPython = true;
console.log("3");
console.log(KnowsJavaScript || KnowsPython);

//4
const isRaining = true;
console.log("4");
console.log(!isRaining);
//5
const likesMusic = false, playesGuitar = false, hasTime = true;
console.log("5");
console.log(likesMusic && (playesGuitar || hasTime));
//6
const personAge = 25;
console.log("6");
console.log(personAge > 18);

//7
const currentTemperature = 30;
console.log("7");
console.log(currentTemperature > 30 || currentTemperature < 20);

//8
const firstNumebr = 10, secondNumber = '10';
console.log("8");
console.log("== :", firstNumebr == secondNumber)
console.log("=== :",firstNumebr === secondNumber);

//9
const budget = 600, expense = 450;
console.log("9");
console.log(expense <= budget ? "less or equal" : "greater");

//10
const persone1Height = 170, perspne2Height = 165;
console.log("10");
console.log(persone1Height > perspne2Height ? "greater" : persone1Height === perspne2Height ? "equal" : "less");








