//N개의 상하의. i번째 상의와 i번째 하의는 모두 색상 i를 가진다.
//다른 색의 상의,하의 N개. 상의와 하의가 서로 다른 색상인 조합?



var readline = require('readline');
rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


var n = 0;
rl.on("line",function(line){
    n = line;
    rl.close();
}).on("close",function(){
    n = n*(n-1);
    console.log(n);
})