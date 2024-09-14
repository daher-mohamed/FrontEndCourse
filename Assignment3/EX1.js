console.log("EX1.1");
function checkBoolean(isTrue){
    return isTrue ?  "YES" : "NO";
}
console.log("EX2.1");
function sumLowestNumber(arr){
    let v1 = arr[0] > arr[1] ? arr[1] : arr[2], v2 = arr[1] < arr[0] ? arr[0] : arr[1];
    for(let i = 2; i < arr.length; i++){
        if(v1 > arr[i]){
            v2 = v1;
            v1 = arr[i];
        }else if(v2 > arr[i]){
            v2 = arr[i];
        }
    }
    return v1 + v2;
}
console.log("EX2.2");
function convertBinaryToInteger(binary){
    let pow = 1;
    let ans = 0;
    for(let i = binary.length - 1; i >= 0; i--){
        ans += pow * binary[i];
        pow *= 2;
    }
    return ans;
}
console.log("EX2.3");
function findNextSquare(value){
    let i = 1;
    while( i * i < value)
        i++;
    return i * i == value ? (i + 1) * ( i + 1) : -1; 
}
console.log("EX2.4");
function findUniq(arr){
    let v1 = arr[0], v2 = arr[1];
    for(let i = 2; i < arr.length; i++){
        if(v1 === v2 && v1 != arr[i])
            return arr[i];
        else if(v1 === arr[i] && v1 != v2)
            return v2;
        else if(v2 === arr[i] && v2 != v1)
            return v1;
    }
    return -1;
}
console.log("EX2.5");
function summation(num){
    let ans = 0;
    for(let i = 1; i <= num; i++)
        ans += i;
    return ans;
}
console.log("EX2.6");
function centuryFromYear(year){
    return year % 100 == 0 ? year / 100 : year / 100 + 1;
}
console.log("EX2.7");
function basicOp(op, val1, val2){
    return op === '*' ? val1 * val2 : op === '/' ? val1 / val2 : op === '-' ? val1 - val2 : val1 + val2;
}
console.log("EX3.1");
function nb_year(p0, percent, aug, p){
    let ans = 0;
    while(p0 < p){
        p0 = p0 + p0 * percent / 100 + aug;
        ans++;
    }
    return ans;
}
console.log("EX3.2");
function inBus(pepole){
    let val = 0;
    
   pepole.map(p => val = val + p.getIn);
   pepole.map(p => val = val - p.getOff);
   return val;
}

console.log("EX4.1");
function fib(val){
    let v1 = 1, v2 = 1;
    for(let i = 1; i < val; i++){
        let temp = v2;
        v2 = v1 + v2;
        v1 = temp;
    }
    return v2;
}
function trib(val){
    let v1 = 1, v2 = 1,v3 = 1;
    for(let i = 2; i < val; i++){
        let temp = v3;
        v3 = v1 + v2 + v3;
        v1 = v2;
        v2 = temp;
    }
    return v3;
}

console.log("EX5.1");
function removeFL(str){
    return str.substring(1,str.length - 1);
}
console.log("EX5.2");
function repet(rep,str){
    let ans = "";
    while(rep-- > 0){
        ans.join("str");
    }
    return ans;
}
console.log("EX5.3");
function caml(str){
    let arr = str.includes("-") ? str.split("-") : str.split("_");
    let ans = arr[0];
    for(let i = 1; i < arr.length; i++){
        ans = ans + " " + arr[i];
    }
    return ans;
}
function toWeirdCase(str){
    let ans = "";
    for(let i = 0; i < str.length; i++){
        ans = i % 2 == 0 ? ans + str[i].toUpperCase() : ans + str[i];
    }
    return ans;
}
























