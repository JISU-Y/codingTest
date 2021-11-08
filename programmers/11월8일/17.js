// 문자열 다루기 기본
function solution(s) {
  if (s.length === 4 || s.length === 6) {
    if (!isNaN(Number(s))) {
      return true
    } else return false
  } else {
    return false
  }
}

let s = "1aaaa1"

console.log(solution(s))
