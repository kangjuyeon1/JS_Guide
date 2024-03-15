const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


let N = 0;
let input = [];
let result = [];
rl.on('line', function(line){
    if(N == 0){
        N = line;
    }
    else{
        input.push(line);
        if(input.length == parseInt(N)){
            result = Array.from(new Set(input)).sort((a,b)=> a-b);
            result.forEach(e =>console.log(e));
            rl.close
        }

    }


});



/*
rl.on => 한 줄씩 읽어들임.
input배열을 정렬한 배열을 만든 후 result에 복사.
*/
