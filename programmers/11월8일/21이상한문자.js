// 이상한 문자 만들기
function solution(s) {
  return s
    .split(" ")
    .map((word) => {
      // map으로 단어 축출 (try, hello, world)
      let result = ""
      for (let i = 0; i < word.length; i++) {
        // word마다 length까지 for 문 돌려서
        // 짝 -> 대문자 / 홀 -> 소문자
        if (i % 2 === 0) {
          result += word[i].toUpperCase()
        } else {
          result += word[i].toLowerCase()
        }
      }
      return result
    })
    .join(" ")
  // 다시 띄어쓰기로 합침
  // 그냥 합치면 되는건가.? 원래 띄어쓰기 상관없이?
}

let s = " try  hello   world"
// "TrY HeLlO WoRlD"

console.log(solution(s))

// function solution(s) {
//   let words = s.split(" ")
//   let changedWords = []

//   changedWords = words.map((word) => {
//     return word
//       .split("")
//       .map((el, i) => {
//         return i % 2 === 0 ? (el = el.toUpperCase()) : el
//       })
//       .join("")
//   })

//   console.log(changedWords)
//   return words.join(" ")
// }
