// 짝수와 홀수
let num = 0
function solution(num) {
  let answer = "Odd"
  if (num % 2 === 0) answer = "Even"
  return answer

  // return num%2 ? "Odd" : "Even" // num&2 가 1이 나오면 True가 됨
}

console.log(solution(num))
