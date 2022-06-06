console.log('<===================숫자 데이터======================>')
//구글: math mdn
//toFixed(a):: 소수점 a번째 자리수이하는 생략하고 "문자데이터"로 반환  
//parseInt():: 정수만 반환
//parseFloat():: 소수점까지 반환
const pi = 3.141592654
console.log(pi);

const str = pi.toFixed(2)
console.log(str)
console.log(typeof str)

const integer = parseInt(str)
const float = parseFloat(str)
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)

//math 내장함수 예제
//1.abs():: 절대값을 반환
console.log('abs', Math.abs(-12))   //12

//2.min(a, b):: a, b... 인수 중 가장 작은 값 반환
console.log('min', Math.min(2, 8))  //2

//3.max(a, b,...):: a, b... 인수 중 가장 큰 값 반환
console.log('max', Math.max(2, 8, 125))  //125

//4.ceil():: 인수를 정수로 올림처리
console.log('ceil', Math.ceil(3.14))  //4

//5.floor():: 인수를 정수로 내림처리
console.log('floor', Math.floor(3.14))  //3

//6.round():: 인수 반올림
console.log('round', Math.round(3.14))  //3

//7.random():: 무작위로 랜덤한 값(난수)반환/ fe3_ getRamdom.js 예제 확인/ Math.floor(Math.ramdom() * 10) ==> 0~9사이 정수 랜덤하게 반환
console.log('random', Math.random())  

