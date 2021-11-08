//나누어떨어지는 숫자 배열
function solution(arr, divisor) {
  var answer = []

  answer = arr
    .filter((el) => el % divisor === 0)
    .sort(function (a, b) {
      return a - b
    }) // filtering and sorting

  if (answer.length === 0) answer = [-1]

  return answer
  // return answer.length === 0 ? [-1] : answer.sort((a,b)=>a-b)
}

let arr = [2, 36, 1, 3]
let divisor = 1
// [5,10]

solution(arr, divisor)
