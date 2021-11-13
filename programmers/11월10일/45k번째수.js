// K번째 수
function solution(array, commands) {
  let answer = []
  for (let i = 0; i < commands.length; i++) {
    answer.push(array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[commands[i][2] - 1])
  } // sort() 그냥 이것만 쓰면 안된다!!!
  return answer
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
)
// [5,6,3]
