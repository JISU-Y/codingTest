// 최대공약수와 최소공배수
function solution(n, m) {
  let greatCom = 0,
    leastCom = 0

  greatCom = gcd(n, m)
  leastCom = (n * m) / greatCom

  return [greatCom, leastCom]
}

// 유클리드 호제법 재귀함수
function gcd(n, m) {
  if (m === 0) return n
  else return gcd(m, n % m)
}

console.log(solution(3, 12))
solution(2, 5)

//     System.out.println(num1 * num2 / gcd);
