//https://tc39.es/ecma262/2023/ 공식문서
//https://developer.mozilla.org/ko/


//async, defer

//[입력, 연산, 출력]
//사용자가 입력한 데이터들을
//잘 처리하고 연산해서
//알맞게 다시 사용자에게 출력하기
//데이터를 서버로 보내서 다시 받아오기

// CPU에 최적화된 연산
//메모리의 사용을 최소화

'use strict';

//지역변수
{
let name = 'juyeon';
console.log(name);
name = 'hello';
console.log(name);
}


/*var hoisting
var는 선언하기 전에 사용해도 에러가 나지 않음
var는 block scope가 없음*/

/*const
const daysInWeek = 7;//변경 불가능
security
thread safety
reduce human mistakes
*/



/*variable types
- primitive, single item : number, string, boolean, null, undefined, symbol
- object, box container
- function, first-class function 
*/


//1. number - special numeric values : infinity, -infinity, NaN

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;

//2. string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
const helloBob = `hi: ${brendan}!'`;//template literals(string)


//backtick 사용하기
console.log('value' + helloBob + 'type'+typeof(helloBob));
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);


//3. boolean
const canRead = true;
const test = 3<1;//false


//4. null
//비어있음
let nothing = null;

//5. undefined
//선언은 되었지만 값이 지정되지 않음
let x;


//6. symbol. 
//create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 ===symbol2);//false
const gSymbol1 = Symbol.for('id');//string 상태로 심볼을 만들고 싶을 때
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 ===gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object
const juyeon = {name : 'juyeon', age : 20};
juyeon.age = 23;

//Dynamic typing : dynamically typed language
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);