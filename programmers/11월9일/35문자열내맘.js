// 문자열 내 마음대로 정렬하기
function solution(strings, n) {
  strings.sort((a, b) => {
    // n번째 문자 비교해서 sorting
    if (a[n] > b[n]) return 1
    else if (a[n] < b[n]) return -1
    else if (a[n] === b[n]) {
      // n번째 문자 같으면 그냥 일반 sorting
      if (a > b) return 1
      else if (a < b) return -1
      return 0
    }
    return 0
  })
  return strings
}

solution(["sun", "bed", "car"], 2) // ["car", "bed", "sun"]
// solution(["abce", "abcd", "cdx"], 2) // ["abcd", "abce", "cdx"]
