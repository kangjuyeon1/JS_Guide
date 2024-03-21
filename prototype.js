// const heropy = {
//     firstName : 'starring',
//     lastName : 'kang',
//     getFullName : function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// const neo = {
//     firstName : 'neo',
//     lastName : 'anderson'
// }

// console.log(heropy.getFullName.call(neo)); // this에 noe객체 저장.


//prototype은 내가 만든 함수에 메소드를 만드는 것.  => 지금은 클래스 문법으로 간소화해서 제공됨. 클래스를 배우기 위한 과정이었음 ...
//heropy를 빌려 쓰지 않기 위해 prototype 사용.
//프로토타입의 메소드를 만들 때는 꼭 일반 함수를 사용해야한다(화살표함수x)
function User(first, last){
    this.firstName = first
    this.lastName  = last

}

//user라는 함수에 프로토타입으로 메서드를 만들 것.
User.prototype.getFullname = function(){
    return `${this.firstName} ${this.lastName}`
}

const heropy = new User('hi','hello')
const neo = new User('hiiiii','helooolo')


console.log(heropy.getFullname())
console.log(neo.getFullname())
