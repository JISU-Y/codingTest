// 내적
// a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]
function solution(a, b) {
  let answer = 0

  answer = a
    .map((aEl, i) => aEl * b[i])
    .reduce((acc, cur) => {
      acc += cur
      return acc
    })

  return answer

  //return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}

let a = [1, 2, 3, 4]
let b = [-3, -1, 0, 2]
// 3

console.log(solution(a, b))
