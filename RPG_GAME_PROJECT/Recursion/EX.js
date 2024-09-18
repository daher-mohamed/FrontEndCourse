console.log("EX1");
function countCharacter(party,index){
    if(index == party.length) return 0;
    return countCharacter(party,index + 1) + 1;
}
function countPartyMembers(party){
    return countCharacter(party,0);
}

console.log("EX2");
function searchMember(Array,name,index){
    if(index >= Array.length) return false;
    if(Array[index] === name) return true;
    return searchMember(Array,name,index + 1);
}
function searchCharacter(Array,name){
    for(let i = 0; i < Array.length; i++){
        if(searchMember(Array[i],name,0))  return true;
    }
    return false;
}

console.log("EX3");
function SumDamage(arr,index){
    if(index >= arr.length) return 0;
    return SumDamage(arr,index + 1) + arr[index];
}

function totalDamage(arr){
    return SumDamage(arr,0);
}

console.log("EX4");

function foundMax(arr,index,max){
    if(index >= arr.length) return max;
    max = arr[index] > max ? arr[index] : max;
    return foundMax(arr,index + 1,max);
}

function MaxAttack(arr){
    return foundMax(arr,0,0);
}
 
console.log("EX5");

function foundAvg(arr,index,avg){
    if(index >= arr.length) return avg / index;
    return foundAvg(arr,index + 1,avg + arr[index]);
}

function AVG(arr){
    return foundAvg(arr,0,0);
}
console.log("EX6");

function margerArrays(arr,index,indexA,ans){
    if(index >= arr.length || (indexA >= arr[index].length && index >= arr.length - 1)) return ans;
    if(indexA >= arr[index].length){
        index = index + 1;
        indexA = 0;
    }
    return margerArrays(arr,index,indexA + 1,ans.concat(arr[index][indexA]));

}

function margerArray(arr){
    return margerArrays(arr,0,0,[]);
}

console.log("EX7");
function foundCharacters(arr,index,role,ans){
    if(index >= arr.length) return ans;
    return foundCharacters(arr, index + 1,role, arr[index].role === role ? ans.concat(arr[index].name) : ans)
}
function searchCharacter(arr,role){
    return foundCharacters(arr,0,role,[]);
}

console.log("EX8");
function sumAllPointes(arr,index,ans){
    if(index >= arr.length) return ans;
    return sumAllPointes(arr, index + 1,ans + arr[index].xp)
}
function sumPointes(arr){
    return sumAllPointes(arr,0,0);
}

console.log("EX9");
function foundHighestCharacter(arr,index,ans){
    if(index >= arr.length) return ans;
    if(ans.level < arr[index].level){
        ans = arr[index];
    }
    return sumAllPointes(arr, index + 1,ans)
}
function foundHighest(arr){
    if(arr.length === 0) return "";
    return foundHighestCharacter(arr,1,arr[0]).name;
}


console.log("EX10");
function CountRoleCharacter(arr,index,role,ans){
    if(index >= arr.length) return ans;
    return CountRoleCharacter(arr, index + 1,role, arr[index].role === role ? ans + 1 : ans)
}
function contCharacter(arr,role){
    return CountRoleCharacter(arr,0,role,0);
}

console.log("EX11");
function FoundSmallLength(arr,index,ans){
    if(index >= arr.length) return ans;
    return FoundSmallLength(arr, index + 1, arr[index].length < ans.length ? arr[index] : ans)
}
function foundSmall(arr){
    return FoundSmallLength(arr,1,arr[0]);
}

console.log("EX12");
function FilterAccordingValue(arr,index,value,ans){
    if(index >= arr.length) return ans;
    if(arr[index].level >= value){
        ans.push(arr[index]);
    }
    return FilterAccordingValue(arr, index + 1,value,ans)
}
function FilterArray(arr,value){
    if(arr.length === 0) return [];
    return FilterAccordingValue(arr,0,value,[]);
}


console.log("EX13");
function foundHighestCharacterSkills(arr,index,ans){
    if(index >= arr.length) return ans;
    if(ans.skills < arr[index].skills){
        ans = arr[index];
    }
    return foundHighestCharacterSkills(arr, index + 1,ans)
}
function foundHighestSkill(arr){
    if(arr.length === 0) return "";
    return foundHighestCharacterSkills(arr,1,arr[0]).name;
}

console.log("EX14");
function addItem(arr,item){
    arr.push(item);
    return arr;
}
function flattenInventory(arr){
    let ans = [];
    for(let i=0;i<arr.length;i++){
        ans = Array.isArray(arr[i]) ? ans.concat(flattenInventory(arr[i])) : addItem(ans,arr[i]);
    }
    return ans;
}



 

