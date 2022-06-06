//this
//일반함수: 함수 호출 위치에 따라 this 정의
//화살표 함수: 자신이 선언된 함수 범위에서 this 정의


//setTimeout 예제
const timer = {
  name: 'Aram!',
  timeout: function () {
    setTimeout (()=> {
      console.log(this.name);
    },2000)
  }
}

timer.timeout();  