//콜라츠 추측
function solution(num) {
  let i = 0
  while (num !== 1 && i++ < 500) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1
  }
  return i > 500 ? -1 : i
}

solution(16)

// 재귀함수
function collatz(num, count = 0) {
  return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count)
}
