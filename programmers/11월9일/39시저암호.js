// 시저 암호
function solution(s, n) {
  return (
    s
      .split("")
      .map((letter) => {
        if (letter === " ") return letter
        return letter.toUpperCase().charCodeAt() + n > 90
          ? String.fromCharCode(letter.charCodeAt() + n - 26)
          : String.fromCharCode(letter.charCodeAt() + n)
      }) // 일단 uppercase로 일단 다 돌린다음에 90(Z) 넘어가면 알파벳 개수 뺸 걸 return
      // 아니면 그냥 원래 꺼 return
      .join("")
  )
}

// solution("AB", 1) // "BC"
solution("a B z", 4) // "e F d"

// function solution(s, n) {
// console.log(
//   s
//     .split("")
//     .map((letter) => {
//       let ascLetter = letter.charCodeAt(0) + n

//       return letter
//     })
//     .join("")
// )

//     return s
//       .split("")
//       .map((letter) => {
//         let ascLetter = letter.charCodeAt(0) + n
//         if (letter !== " ") {
//           if (ascLetter === "z") ascLetter -= 97
//           if (ascLetter === "Z") ascLetter -= 65
//           return String.fromCharCode(ascLetter)
//         }
//         return (ascLetter = " ")
//       })
//       .join("")
//     // String.fromCharCode
//   }
