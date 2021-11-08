// 음양 더하기
function solution(absolutes, signs) {
  var answer = 0
  let realNum = ""

  for (let i = 0; i < signs.length; i++) {
    realNum = Number((signs[i] ? "" : "-") + absolutes[i])

    answer += realNum
  }

  return answer
}

let absolutes = [4, 7, 12]
let signs = [true, false, true]
// 9

solution(absolutes, signs)
