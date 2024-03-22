//굳이 배열로 입력받는것보다 문자열로 입력받는게 더 편함. 2차원배열이 되면 분리하기 힘들어짐.

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


let input = '';
let count = 0;
var n = 0;

rl.on('line',function(line){
    if(n == 0)
        n = line
    else
         input +=line.trim();
})

rl.on('close',function(){
    input = input.split(" ").map((item)=>parseInt(item));
    for(let i = 0 ;i<n;i++){
        if(isPrime(input[i]))
            ++count;
    }
    console.log(count);
})

function isPrime(num){
    if(num == 1 )
        return false;
    for(let i = 2; i<=Math.sqrt(num); i++){
        if((num%i) == 0 )
            return false; 
    }
   return true;
}
