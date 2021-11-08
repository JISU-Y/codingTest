// 두 정수 사이의 합
function solution(a, b) {
  var answer = 0

  // 대소관계 비교
  if (a > b) {
    ;[a, b] = [b, a] //
  } else if (a === b) {
    return a
  }

  for (let i = a; i <= b; i++) {
    answer += i
  }
  return answer
}

solution(5, 3)
