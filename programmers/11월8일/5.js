// 문자열을 정수로 바꾸기
let s = ""
function solution(s) {
  return parseInt(s)
}
// parseInt => Number와는 다르게 문자가 혼합되어 있어도 정수로 변환
// parseInt('10px') 이면 parseInt는 10을 반환, Number는 NaN을 반환
// parseInt('f3') -> NaN 반환
console.log(solution(s))
