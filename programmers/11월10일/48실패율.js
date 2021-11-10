// 실패율
function solution(N, stages) {
  let step = new Array(stages.length).fill(0)

  for (let i = 0; i < stages.length; i++) {
    step.fill(i)
    console.log(stages[i] - step[i])
  }
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]) // [3,4,2,1,5] // 실패율 높은 스테이지 순
// solution(4, [4, 4, 4, 4, 4]) // [4,1,2,3]
