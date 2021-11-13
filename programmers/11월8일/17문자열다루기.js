// 문자열 다루기 기본
function solution(s) {
  if (s.length === 4 || s.length === 6) {
    if (s.slice(1, s.length - 1).includes("e")) {
      return false
    }
    if (!isNaN(Number(s))) {
      return true
    } else return false
  } else {
    return false
  }
}

let s = "11e111" // 11x10^111 / 1e11 / pi

console.log(solution(s))

// 정규식
var regex = /^\d{6}$|^\d{4}$/
return regex.test(s)
