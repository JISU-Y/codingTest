// 수박수박수박수박수박수?
function solution(n) {
  let watermelon = ""

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) watermelon += "수"
    else watermelon += "박"
  }

  return watermelon
}

let n = 3

solution(n)

// repeat 사용
function waterMelon(n) {
  var result = "수박"
  result = result.repeat(n - 1).substring(0, n) // repeat 으로 n-1번 수박수박 만들어놓고, n번까지만 자름

  return result
}
