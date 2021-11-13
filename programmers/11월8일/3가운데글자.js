// 가운데 글자 가져오기
function solution(s) {
  let answer = ""
  let centerIdx = Math.floor(s.length / 2)

  if (s.length % 2 === 0) {
    // 길이가 짝수이면
    answer = s.substr(centerIdx - 1, 2) // 자르기 시작하는 위치, 자르려는 length
  } else {
    // 홀수면
    answer = s.substr(centerIdx, 1)
  }

  // console.log(answer)
  return answer
}
