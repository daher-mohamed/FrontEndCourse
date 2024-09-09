console.log("EX1");
let border = [[0,2,0],[1,3,0],[0,2,0]];
let x = 1, y = 1, place = "north";

switch (place) {
    case "north":
        if(y > 0){
            console.log("direction in x is %d and the direction in y is %d",x,y - 1);
        }else{
            console.log("can't do a move in the board");
            
        }
        break;
    case "south":
        if(y < 2){
                console.log("direction in x is %d and the direction in y is %d",x,y + 1);
        }else{
            console.log("can't do a move in the board");
            
        }
        break;
    case "east":
        if(x > 0){
            console.log("direction in x is %d and the direction in y is %d",x - 1,y);
        }
        else{
            console.log("can't do a move in the board");
            
        }
        break;
    case "west":
        if(x < 2){
            console.log("direction in x is %d and the direction in y is %d",x + 1,y);
        }
        else{
            console.log("can't do a move in the board");
            
        }
        break;

    default:
        break;
}

console.log("EX2");
const playerHP = 100, playerAttack = 20, enemyHP = 50, enemyAttack = 15;
console.log(playerHP / enemyAttack > enemyHP / playerAttack ? "player wins" : "enemy wins");


console.log("EX3");
const game = [[0,2,0],[1,3,0],[0,2,0]];
let  enemyPlaces = [];
let indexE = 0;
for(let i = 0; i < game.length; i++){
    for(let j = 0; j < game[i].length; j++){
        if(game[i][j] == 2){
            enemyPlaces.push({x : j, y : i});
        }
    }
}
for(let i = 0; i < enemyPlaces.length; i++){
    console.log(enemyPlaces[i]);
    
}

console.log("EX4");

const playerPostion = [1,1], goalPostion = [0,2];
let ans = [];
let val = playerPostion[0];
if(val > goalPostion[0]){
    while(val > goalPostion[0]){
        ans.push("west");
        val -= 1;
    }
}else if(val < goalPostion[0]){
    while(val < goalPostion[0]){
        ans.push("east");
        val += 1;
    }
}
val = playerPostion[1];
if(val > goalPostion[1]){
    while(val > goalPostion[1]){
        ans.push("north");
        val -= 1;
    }
}else if(val < goalPostion[1]){
    while(val < goalPostion[1]){
        ans.push("south");
        val += 1;
    }
}
for(let i = 0; i < ans.length; i++){
    console.log(ans[i]);
}
