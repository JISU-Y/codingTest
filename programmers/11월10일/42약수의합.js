// 약수의 합
function solution(n) {
  let sum = 0

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sum += i
  }

  return sum
}

solution(12) // 28
solution(5) // 6

// 재귀로 풀었는데 stack size 초과한다고도 함
function solution(n, a = 0, b = 0) {
  return n <= a / 2 ? b : solution(n, a + 1, (b += n % a ? 0 : a))
}
