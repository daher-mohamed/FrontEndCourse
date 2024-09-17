console.log("EX6.1");
function accum(word){
    let arr = word.split('');
    let ans = "";
    arr.map((value, index)=> {ans += value.toUpperCase() + value.toLowerCase().repeat(index)
        ans = index != arr.length - 1 ? ans + "-" : ans;
    } );
    return ans
}

console.log("EX6.2");
function countDuplicates(strs){
    let arr = strs.split("");
    let chars = []
    let repets = arr.reduce((acc, char) => {
        acc[char] =  acc[char] ? acc[char] + 1 : 1;
        return acc;
    }, {}); 
    let ans = Object.entries(repets).filter(([keys, value]) => value > 1)
    return ans.length;
}


