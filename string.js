console.log('<================== STRING =======================>')

//length() :: 문자열의 갯수
//indexOf() :: 해당 값이 있으면 0부터 개수를 세서 반환, 없으면 -1
//slice(a,b):: 문자열의 일부추출해 새로운 문자열 반환
//replace(a,b) :: a를 b로 대체
//match(): 특정 문자 데이터에서 '정규표현식: /.+(?=@)/'을 통해 특정 문자를 일치시켜 '배열데이터로 반환'하는데 배열데이터 내부에서 원하는 정보를 사용


const str = '12 34';  //공백도 문자
const world = 'hello world!';  

console.log(str.length)   //5
console.log(world.indexOf('world'))   //6 
console.log(world.indexOf('aram') !== -1)    //false
console.log(world.slice(0, 3))    

//ex1: world라는 단어추출예제
const strPosition = world.indexOf('world');   //6
const strNum = world.length;   //12

console.log(strNum, strPosition, world.slice(strPosition, strNum-1))

//ex2-1: hello world!  -> hello ARAM!으로 바꾸기
console.log(world.replace('world', 'ARAM'));

//ex2-2: hello world!에서 hellow만 남기기
console.log(world.replace(' world!', ''));

//ex3: match()메소드 예제
const email = 'second@gmail.com'
console.log(email.match(/.+(?=@)/)[0])