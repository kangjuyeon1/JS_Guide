//문제 하나를 풀더라도 여러가지 방법으로 생각해보자.
//JS 이녀석 문법구조가 꽤나 복잡하다.

var readline = require('readline');
const rl = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout,
    });


let input = [];
var sum = 0;
var s = 0;
//라인을 기준으로 행 나뉘고, 공백을 기준으로 열 나뉜다. => 이중배열로 저장됨.
rl.on("line",function(line){
    input.push(line.split(' ').map((el)=>parseInt(el)));
}).on("close",function(){

    var n = input[0];
    for(let i = 0; i<n; i++){
        sum+=input[1][i];
        if(input[2][i] == 0){
            s+=input[1][i];
        }
    }
    console.log(sum,s);
    
    process.exit();
})




//map : 배열내의 모든 요소에 함수를 적용하여 새로운 배열 반환.