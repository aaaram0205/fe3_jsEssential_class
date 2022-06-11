console.log('<=================== 배열 ARRAY API  ======================>')

//배열의 인덱스: 배열의 데이터 위치/ 0베이스로 시작
//인덱싱하다: 배열 데이터 조회를 위해 배열명[인덱스]하는 것.
//['item','item'] 또는 ['element','element']
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'B', 'Cherry']

console.log(numbers);
console.log(fruits);

//2출력, CHERRY 출력
console.log(numbers[1]);
console.log(fruits[2]);


console.log('<=================== ARRAY mdn ======================>')
//array.prototype.메소드::  prototype.메소드 => 리터럴.메소드로 사용 가능


//1. array.prototype.find(): 주어진 판별함수를 만족시키는 첫번째 요소 값 반환, 없으면 undefined
const findNumbers = [5, 12, 164, 55, 2, 3];
const found = findNumbers.find(el => el > 10);   //* 콜백함수: 메소드의 인수로 사용하는 함수
console.log('array.prototype.find()', found) //12


//2. array.prototype.length: 배열데이터 갯수 출력
console.log('array.prototype.length', numbers.length)  //4
console.log('array.prototype.length', fruits.length)   //3
console.log('array.prototype.length/ 리터럴에 바로 붙여 사용가능하다.', [1,2].length)  //2
console.log('array.prototype.length/ 빈 배열인지 확인할 때 자주쓴다.', [].length)  //0

//3. array.prototype.concat(배열을 인수로 받음): 두 개의 배열을 병합해 새로운 배열을 반환
console.log(numbers.concat(fruits)) //['1', '2', '3', '4', 'apple', 'banana', 'cherry']
console.log('concat()은 원본 배열데이터가 손상되지 않는다.:', 'number 배열:', numbers, 'fruits 배열:', fruits)

//4. array.prototype.forEach(function (element, index, array)): 콜백함수(익명함수)를 인수로 받는 배열 반복문 / 배열갯수만큼 콜백이 반복적으로 실행
// forEach 의 매개변수로 쓰인 array는 그 배열데이터 자체를 지칭/ 배열을 '참조'(js 데이터의 불변성)할 수 있기 때문에 잘 사용하지 않는다.
fruits.forEach (function(fruit, i, array) {
  console.log('forEach(item, index, array):', fruit, i, array)
});


//5.map(): 콜백으로 실행된 배열반복문 값을 '새로운 배열로 반환(return)'하는 점이 forEach와 차이점.
//배열을 item에 갯수만큼 반복하는데:: 따로 반환되는 값이 없다 = forEach()/ 반환값 있다 = map() ==> 배열데이터를 새로운 객체 데이터를 리턴해 사용가능!

const a = fruits.forEach(function (fruit, index){
  console.log(`${fruit}-${index}`)
})
console.log('forEach()사용: ',a)  // forEach는 따로 반환되는 값이 없어서 undefined

const b = fruits.map(function (item, index){
  return `${item}-${index}`
})
console.log('map()사용: ',b)

//배열값을 객체데이터로 생성 가능하다.
const c = fruits.map(function (item, index){
  return {
    id: index,
    name: item
  }
})
console.log('map()으로 새로운 객체데이터 반환 가능하다: ',c)

const c1 = fruits.map((item, index) => ({
  id: index,
  name: item
}))
console.log('map() 화살표함수 축약: ',c1)

//화살표함수와 일반함수 차이점: 내부에서 사용하는 'this'의 차이점/ this가 없으면 둘다 사용가능.


//6.filter: 특정 기준에 해당하는 값만 반환/ 원본회손 X/ 필터링한 값을 반환하므로 원본과 배열이 다를 수 있음
const numMap = numbers.map(number => {
  return number < 3  //boolean데이터를 반환한 새로운 배열을 반환
})
console.log(numMap)

const numFilter = numbers.filter(number => {
  return number < 3  // 조건에 필터링된 값을 새로운 배열을 반환
})
console.log(numFilter)

console.log('map(), filter()은 원본데이터를 훼손하지않는다.', numbers)
//numFilter 화살표 함수 축약형 
const numFilter1 = numbers.filter(number => number < 3)
console.log(numFilter1)


//7. find(): find()의 콜백이 배열의 갯수만큼 실행해 원하는 데이터를 찾으면 종료.
const fruitsFind = fruits.find(fruit => {
  return /^B/.test(fruit)   //정규표현식: /대문자 B로 시작하는(^) 문자데이터/ true, false 반환 => find()에서 true값인 item을 반환한다.
})
console.log('find():',fruitsFind)

const fruitsFindIndex = fruits.findIndex(fruit => {
  return /^B/.test(fruit) //배열의 인덱스를 찾아 그 값을 삭제, 새로운 아이템 추가하는데 사용
})
console.log('findIndex():',fruitsFindIndex)

const fruitsFindIndex1 = fruits.findIndex(fruit => /^B/.test(fruit))
console.log('findIndex() 화살표함수 축약형:',fruitsFindIndex1)


//8. includes(): 인수로 사용한 특정데이터가 포함되어 있는지 확인
const numIncludes = numbers.includes (3)
console.log(numIncludes)

const fruitsIncludes = fruits.includes('Banana')
console.log(fruitsIncludes)


//9. push(): 배열 맨 뒤에 삽입 | unshift(): 배열 맨 앞에 삽입
//원본배열 수정됨 주의!

numbers.push(5);
console.log('push():', numbers)

numbers.unshift(0)
console.log('unshift():',numbers)


//10. reverse():배열의 아이템 순서를 뒤집는 메소드
//numbers.reverse()
//fruits.reverse()
//console.log('reverse():', numbers)
//console.log('reverse():', fruits)

//11. splice(): 1.특정 인덱스의 아이템 삭제 2. 특정 인덱스자리에 새로운 아이템 추가
//numbers.splice(2, 1)
numbers.splice(2, 0, 99)
fruits.splice(2, 1, 'orange')
console.log(numbers)
console.log(fruits)