//x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  var answer = []

  for (let i = 1; i <= n; i++) {
    answer.push(x * i)
  }
  return answer
}

let x = 2
let n = 5
console.log(solution(x, n))

// 역시..
// function solution(x, n) {
//   return Array(n)
//     .fill(x)
//     .map((v, i) => (i + 1) * v)
//   // n개의 array을 생성하고 x로 모두 채운다
//   // 그 배열을 돌면서 idx와 x값을 곱한 것으로 바꿔준다.
// }

// // map 설명
// const numbers = [1]
// numbers.map((number, index, source) => {
//   // number: 요소값
//   // index: source에서 요소의 index
//   // source: 순회하는 대상
//   console.log(number) // 1
//   console.log(index) // 0
//   console.log(source) // [1]
//   return number * number
// })
