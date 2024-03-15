var readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


let input = [];



rl.on("line",function(line){
    input.push(line.split(' ').map((el)=>parseInt(el)))
}).on("close",function(){
    let size = input.shift(); //첫번째 행에 있는 행과 열의 정보를 뺏어옴. 3 2
    let m1 = input.splice(0,size[0]); 
    
    size = input.shift(); // 2 3
    let m2 = input.splice(0,size[0]);
    
    let result = [];

    for(let i = 0; i<size[1];i++){//0,1,2
        let value = [];
        for(let j = 0; j<size[1]; j++){//0,1,2
            let n = m1[i].map((el,idx)=>el*m2[idx][j]);
            let sum = n.reduce((past,curr)=>past+curr,0);
            value.push(sum);
        }
        result.push(value.join(" "));
    }
    console.log(result.join("\n"));
    process.exit();
});

//맵 지대로 활용하네. JS에서의 배열과 C의 배열 사용법이 많이 다른 것 같다. 


/*
https://yoon-dumbo.tistory.com/entry/NODEJS-%EA%B8%B0%EB%B0%98%EC%9C%BC%EB%A1%9C-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%ED%92%80%EB%95%8C-%EC%9E%85%EB%A0%A5%EB%B0%9B%EB%8A%94-%EB%B0%A9%EB%B2%95
*/