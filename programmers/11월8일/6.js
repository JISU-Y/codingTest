//없는 숫자 더하기
let numbers = [5, 8, 4, 0, 6, 7, 9]

// function solution(numbers) {
//   let result = 0
//   for (let i = 0; i < 10; i++) {
//     if (!numbers.includes(i)) {
//       result += i
//     }
//   }
//   return result
// }

// reduce
function solution(numbers) {
  const sum = numbers.reduce((acc, cur) => {
    acc += cur
    return acc
  })
  return 45 - sum
}

console.log(solution(numbers))
