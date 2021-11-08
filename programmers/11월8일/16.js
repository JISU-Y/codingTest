//문자열 내 p와 y의 개수
function solution(s) {
  let lowerStr = s.toLowerCase()
  let pPos = 0,
    yPos = 0
  let pCount = -1,
    yCount = -1
  let i = pPos

  while (pPos !== -1) {
    pCount++
    pPos = lowerStr.indexOf("p", i)
    i = pPos + 1
  }
  while (yPos !== -1) {
    yCount++
    yPos = lowerStr.indexOf("y", i)
    i = yPos + 1
  }
  console.log(s.toUpperCase().split("P"))
  return pCount === yCount ? true : false

  // 모르는 부분
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length // p 기준으로 나누면 '', '' 이렇게 나옴
  return s.match(/p/gi).length == s.match(/y/gi).length // 정규식 *** 중요
  // 정규 표현식 => 문자열 / 조건문?
}

let s = "pPoooyY" // true
// let s = "Pyy" // false
console.log(solution(s))
