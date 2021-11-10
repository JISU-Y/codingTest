// 소수 찾기
function solution(n) {
  let count = 0

  return count
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}

solution(5) // 3

// 시간초과
// function solution(n) {
//     let count = 0

//     for (let num = 2; num <= n; num++) {
//       if (isPrime(num)) count++
//     }

//     console.log(count)
//     return count
//   }

//   function isPrime(n) {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) return false
//     }
//     return true
//   }

// function solution(n) {
//     let count = 0

//     let num = 2
//     while (num <= n) {
//       if (isPrime(num++)) {
//         count++
//       }
//     }

//     return count
//   }
