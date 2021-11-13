//3진법 뒤집기
function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3)
}

let n = 45 // 7

console.log(solution(n))
