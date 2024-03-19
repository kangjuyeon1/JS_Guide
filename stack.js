const fs = require("fs");


//const readFIleSyncAddress = 'dev/stdin'; //-> 이렇게 해야 백준 사이트에서 입력 값을 받을 수 있다.

const readFileSyncAddress = "input.txt";

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
//trim은 앞뒤의 개행문자를 제거해주는 메서드.

//const [n, ...commands] = input;



/*
js 내장 메소드를 사용하니 런타임 에러 발생. 
function solution(n,commands){
    const stack = [];
    for(let i = 0; i<n; i++){
        const command = commands[i].split(' ')[0]; // command는 input배열의 원소들인가봐 
        switch(command){
            case 'push':
                const pushItem = commands[i].split(' ')[1];
                stack.push(pushItem);
                break;

            case 'pop':
                if(stack.length === 0) console.log(-1);
                else console.log(stack.pop());
                break;

            case 'size':
                console.log(stack.length);
                break;

            case 'empty':
                if(stack.length === 0)console.log(1);
                else console.log(0);
                break;

            case 'top':
                if(stack.length === 0)console.log(-1);
                else console.log(stack[stack.length -1]);
                break;
        }
    }
}
*/


//결과값을 저장해 두었다가 한번에 출력

const stack = [];
const result = [];

const len = input.shift();

for(let i = 0; i<len;i++){
        switch(input[i]){
        case 'pop':
            result.push(stack.pop() || -1);
            break;

        case 'size':
            result.push(stack.length);
            break;
        
        case 'empty':
            result.push(stack[0] ? 0 : 1);
            break;
        
        case 'top':
            result.push(stack[stack.length-1]|| -1);
            break;

        default:
            stack.push(input[i].split(" ")[1]);
            break;
    }
}

console.log(result.join('\n'));





//런타임에로가 입력때문에 날 수도 있군...