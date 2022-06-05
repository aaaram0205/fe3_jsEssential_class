console.log ('<======================= 03. ES6 classes =======================>')
//03.ES6 classes: js는 프로토타입기반의 프로그래밍 언어인데 신뢰도와 안정성이 높은 다른 객체지향 언어들의 영향을 받아 class라는 개념을 흉내내 새로운 문법을 제공

//03-1: 일반함수에서 ': function' 축약해서 다음과 같이 작성할 수 있다. (ex: constructor(){})
//normal: function(){}   ----> normal(){}
const Aram = {
    name: 'Aram',
    // normal: function () {
    //     console.log(this.name);  // Aram
    // },
    normal() {
        console.log(this.name);  // Aram
    },
    arrow: () => {
        console.log(this.name);  //undefined
    }
}

Aram.normal();
Aram.arrow();

//03-2: prototype 문법을 class로 변환
//1. prototype
// function User (first, last) {
//     this.firstName = first;
//     this.lastName = last;
// }
// User.prototype.getFullName = function (){
//     return `${this.firstName} ${this.lastName}`
// }

//2. class
class User {
    constructor (first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
} 

const aramLee = new User ('aram', 'Lee');
const msPark = new User ('MS', 'Park');
console.log('리턴값:', aramLee.getFullName(),',', msPark.getFullName());


console.log ('<======================= 04. 상속(확장) =======================>')
//04. 상속(확장): 만들어 놓은 클래스에 'extends'와 'super(인수1, 인수2..)'를 이용해 확장할수있다.
class Vehicle {
    constructor (name, wheels) {
        this.name = name;
        this.wheels = wheels;
    }
}

const myVehicle = new Vehicle ('운송수단', 4);
console.log (myVehicle);

//'extends'와 'super(인수1, 인수2..)'로 상속,확장
class Bicycle extends Vehicle {
    constructor (name, wheels) {
        super (name, wheels);
    }
    getFull(){
        return `${this.name} ${this.wheels}`
    }
}

const myBicycle = new Bicycle ('삼천리', 2);
const daughtersBicycle = new Bicycle ('세발 자전거', 2);
console.log(myBicycle, daughtersBicycle);
console.log ('프로토타입 리턴값:',myBicycle.getFull())

//'extends'와 'super(인수1, 인수2..)'로 확장된 클래스에 다른 인수를 추가할 수있다.
class Car extends Vehicle {
    constructor (name, wheels, licences) {
        super(name, wheels);
        this.licences = licences;
    }
}

const myCar = new Car ('벤츠', 4, true);
const daughtersCar = new Car ('포르쉐', 4, false);
console.log(myCar, daughtersCar);