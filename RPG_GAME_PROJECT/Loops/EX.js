console.log("Ex1");
//Calculate
const array = [100,150,75];
let sum =  0;
for(let i = 0; i < array.length; i++){
    sum += array[i];
}
console.log(sum);

//Locate
console.log("EX2");
const questTutles = ["Quest 1", "Quest 2", "Quest 3", "Quest 4"];
console.log(questTutles.indexOf("Quest 2"));

//List Enemies
console.log("EX3");
const enemyHealth = [80,120,65,200];
for(let i = 0; i < enemyHealth.length; i++){
    if(enemyHealth[i] > 100){
        console.log(i);
    }
}

console.log("EX4");
// Enhance All
let rewards = [50,100,75];
for(let i=0; i<rewards.length; i++){
    rewards[i] = rewards[i] + 20;
}
for(let i=0; i<rewards.length; i++){
    console.log(rewards[i]);
}

console.log("EX5");
//Specific Reward
const questRewards =[50,100,75,100];
let counts = 0;
for(let i=0; i<questRewards.length; i++){
    counts = questRewards[i] == 100 ? counts + 1 : counts;
} 
console.log(counts);

console.log("EX6");
//sufficient Challenge
const questChallenges = [120,150,75];
let ischallenge = true;
for (let i = 0; i < questChallenges.length;i++){
    if(questChallenges[i] < 100){
        ischallenge = false;
        break;
    }
}
console.log(ischallenge);

console.log("EX7");
//Maximum Reward
const maxReward =[50,100,75,150];
let place = 0, reward = maxReward[0];
for(let i = 1; i < maxReward.length;i++){
    if(maxReward[i] > place){
        reward = maxReward[i];
        place = i;
    }
}
console.log("the place is %d and ihe value is %d", place, reward);

console.log("EX8");
//Total Assault Value
const enemyPower = [50, 80, 65, 90], enemyHel = [80, 120, 60, 100];
let ans = 0;
for(let i = 0; i < enemyPower.length; i++){
    ans += enemyPower[i] + enemyHel[i];
}
console.log(ans);

console.log("EX9");
//Total Experience
const arr = [[100,200], [150,175], [120,250]]
let res = 0;
for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
        res += arr[i][j];
    }
}
console.log(res);

















