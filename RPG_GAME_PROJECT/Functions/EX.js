console.log("EX1");
let charcterState;
function initializeCharacterStats(){
    charcterState = [];
}

console.log("EX2");
function addCharacterStat(name, length){
    if(!charcterState){
        initializeCharacterStats();
    }
    charcterState.push({name:name, length:length});
}

console.log("EX3");
function containsWordInTitle(gameTitle, keyWord){
    return keyWord.includes(gameTitle);
}

console.log("EX4");
function allTitlesStartWithSameLetter(gamesTitle){
    let char = gamesTitle[0][0];
    for(let i = 1; i < gamesTitle.length; i++){
        if(char != gamesTitle[i][0]) return false;
    }
    return true;
}
console.log("EX5");
function concatenateGenres(genres){
    let ans = "";
    genres.map((g)=> ans = ans.length != 0 ? ans + ', ' + g : ans + g);
    return ans;
}

console.log("EX6");

function countInXPrang(XP,low,high) {
    return XP.reduce((acc,xp)=>{
        acc = xp >= low && xp <= high ? acc + 1 : acc;
        return acc;
    },0)
}

console.log("EX7");
function findGameByDeveloper(gameTitle, dovelopers,name){
    //  return dovelopers.filter((index)=>{return dovelopers[index] === name})
    let indexes = [];
    for(let i = 0; i < dovelopers.length; i++){
        if(dovelopers[i] === name){
            indexes.push(i);
        }
    }
   return gameTitle.filter((title) => indexes.includes(gameTitle.indexOf(title))) 
}

console.log("EX8");
function capitalizeFirstLetter(gamesTitle) {
    return gamesTitle.reduce((acc,gameTitle)=>{
        let value = gameTitle;
        acc.push(value.charAt(0).toUpperCase() + value.slice(1));
        return acc;
    },[]);

}

console.log("EX9");

function uniqueXP(points){
    return points.reduce((acc,x)=>{
        if(!acc.includes(x)){
            acc.push(x);
        }
        return acc;
    },[]);
}
console.log("EX10");
function sortTitleAlphabetically(titles){
    let value = titles.sort((a,b)=>a.toLowerCase() > b.toLowerCase() ? 1 : -1);
    
    return value;
}

console.log("EX11");
function filterXPByCriteria(array,less,greater){
    return array.filter((value)=> value > less && value < greater);
}


















