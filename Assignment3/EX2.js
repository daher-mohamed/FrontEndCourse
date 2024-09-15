console.log("EX6.1");
function accum(word){
    let arr = word.split('');
    let ans = "";
    arr.map((value, index)=> {ans += value.toUpperCase() + value.toLowerCase().repeat(index)
        ans = index != arr.length - 1 ? ans + "-" : ans;
    } );
    return ans
}

