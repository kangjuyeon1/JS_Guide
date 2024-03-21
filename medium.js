const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

let input = [];

//행과 열 저장.

rl.on('line',(line)=>{
    input.push(line.split(' ').map((el)=>parseInt(el)));
})
rl.on('close',function(){
    let num = input[0]*1;//이렇게 하면 숫자로 바뀜. 행 저장

    for(let i = 1; i<=num; i++){
        let score = input[i];
        let num2 = score.shift()*1; // 열 저장
        let count = 0;
        //평균 구하기
        let avg = score.reduce((acc,v)=> acc+=v*1,0);
        avg/=num2;
        //console.log(avg);

        for(let j  = 0; j<num2; j++){
            if(score[j]>avg)
                count++
        }

        let result = ((count/num2)*100).toFixed(3);
        console.log(result + "%");
    }

                                       

})


