// 실패율
function solution(N, stages) {
  let step = new Array(stages.length).fill(0)
  let temp = []
  let failRate = []
  for (let i = 1; i <= N; i++) {
    step = step.fill(i) // [1,1,1,1,1,1,1,1] 비교 군 만듦
    console.log("stage " + i)
    for (let j = 0; j < stages.length; j++) {
      temp.push(stages[j] - step[j]) // 실제 도전자들의 stage에서 비교군을 뺀 배열을 만듦
    }

    // 그럼 0인 경우가 그 스테이지를 통과하지 못한 사람인 것
    // 0의 개수 / 양수의 개수가 실패율
    let indices = []
    let idx = temp.indexOf(0)
    while (idx != -1) {
      indices.push(idx)
      idx = temp.indexOf(0, idx + 1)
    }
    console.log(temp)
    console.log(indices)
    // 음수는 그 전 스테이지들이므로 없앰
    temp = temp.filter((el) => el >= 0)
    // 실패율
    console.log("실패율 " + indices.length + "/" + temp.length)
    failRate.push(indices.length / temp.length)
    // temp 초기화
    temp = []
  }

  // idx sorting을 어떻게 하지
  let rateSort = []
  let max = Math.max(...failRate)
  console.log(failRate)
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]) // [3,4,2,1,5] // 실패율 높은 스테이지 순
// solution(4, [4, 4, 4, 4, 4]) // [4,1,2,3]
