// 평균 구하기
function solution(arr) {
  let sum = arr.reduce((acc, cur, idx) => {
    return (acc += cur)
  }, 0)

  return sum / arr.length
}

let arr = [1, 2, 3, 4]

solution(arr)
