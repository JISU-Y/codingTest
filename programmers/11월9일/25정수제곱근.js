// 정수 제곱근 판별
function solution(n) {
  var answer = -1

  let sqN = Math.sqrt(n)

  // Number.isInteger(num) // 정수판별
  if (sqN === Math.floor(sqN)) {
    answer = Math.pow(sqN + 1, 2)
  }

  return answer
}

solution(121)

// 다른 풀이
function nextSqaure(n) {
  // n을 루트n을 나누었을 때 나누어 떨어지면 +1해서 제곱
  // 아니면 X
  switch (n % Math.sqrt(n)) {
    case 0:
      return Math.pow(Math.sqrt(n) + 1, 2)
    default:
      return -1
  }
}
