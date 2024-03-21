//reduce 메서드란 뭘까.
//백준 10828 js로 풀어보기.

const input = require('fs').readFileSync('input.txt').toString().split('\n');

input.shift();

const stack = [];

const fun = {
    pop : () => stack.pop() || -1,
    size : () => stack.length,
    empty : () => stack[0] ? 0:1,
    top : ()=> stack[stack.length-1] || -1,
    push : (item) =>{
        stack.push(item.split(" ")[1]);
        return '';
    }
}

const result = input.reduce((acc,v)=>
    acc + (fun[v] ? `${fun[v]()}\n` : fun.push(v)), '');

console.log(result);

/*
풀다보니 map과 비슷하다는 생각이 들었다.
차이점은 ? 
map vs  reduce

공통점은 배열의 모든 요소들을 순회하면서 콜백함수를 실행시킨다는 것.
그러나, 
reduce는 반환되는 값이 배열의 형태가 아닐 수 있다. 
initialValue(두번째 인자)로 어떤 값을 주느냐에 따라 배열이나 객체의 형태로 반환될수도, 숫자로 반환시킬 수도 있따. 

=> reduce는 배열의 형태에서 원하는 형태(객체, 배열, 숫자, 문자 등)로 값을 변환시키고 싶을 때 활용.


*/


let arr = [1,2,3,4,5];
let double = arr.map(el => el*2)

let  sum = arr.reduce((acc,cur)=>acc+cur)
