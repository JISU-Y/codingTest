// 정수 내림차순으로 배치하기
function solution(n) {
  let answer = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("")

  return parseInt(answer)
}

solution(118372)
