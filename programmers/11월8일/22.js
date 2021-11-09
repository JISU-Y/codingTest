// 자릿수 더하기
function solution(n) {
  let arr = n.toString().split("")
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i])
  }

  return sum

  // 더 쉬운 방법
  // current를 그냥 parseInt해서 계산
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}

let N = 123

console.log(solution(N))
