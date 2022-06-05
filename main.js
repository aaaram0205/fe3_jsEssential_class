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
}

const myBicycle = new Bicycle ('삼천리', 2);
const daughtersBicycle = new Bicycle ('세발 자전거', 2);
console.log(myBicycle, daughtersBicycle);

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