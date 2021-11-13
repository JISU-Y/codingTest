// 숫자 문자열과 영단어
function solution(s) {
  const numStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

  for (let i = 0; i < numStr.length; i++) {
    let arr = s.split(numStr[i]) // 돌리다 걸리는 문자열있으면 그걸로 쪼개서 배열에 저장
    console.log(s)
    s = arr.join(i) // 고대로 그 idx(숫자)로 이어붙임
  }

  return Number(s)
}

let s = "23four5six7"
// 1478

solution(s)

// 정규표현식
function solution(s) {
  s = s
    .replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9)
  return parseInt(s)
}
