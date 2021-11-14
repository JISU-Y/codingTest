// [1차] 다트게임
function solution(dartResult) {
  let changed = dartResult.replace(/10/g, "t").split("")
  let score = 0
  let sum = []

  changed.forEach((el, idx) => {
    if (!isNaN(Number(el))) score = Number(changed[idx])
    if (el === "t") score = 10
    if (el === "S") sum.push(score)
    if (el === "D") sum.push(Math.pow(score, 2))
    if (el === "T") sum.push(Math.pow(score, 3))
    if (el === "*") {
      sum[sum.length - 2] = sum[sum.length - 2] * 2 // 전 점수도 두배
      sum[sum.length - 1] = sum[sum.length - 1] * 2 // 방금 점수 두배
    }
    if (el === "#") {
      sum[sum.length - 1] = sum[sum.length - 1] * -1
    }
  })
  return sum.reduce((acc, cur) => (acc += cur), 0)
}

// solution("1S2D*3T") // 37
// solution("1D2S#10S") // 9
// solution("1D2S0T") // 3
// solution("1S*2T*3S") // 23
// solution("1D#2S*3S") // 5
// solution("1T2D3D#") // -4
solution("1D2S3T*") // 59

// function solution(dartResult) {
//   let changed = dartResult
//     .replace(/S\*/g, "A")
//     .replace(/D\*/g, "B")
//     .replace(/T\*/g, "C")
//     .replace(/S#/g, "E")
//     .replace(/D#/g, "F")
//     .replace(/T#/g, "G")
//     .replace(/10/g, "t")
//     .split("")
//   console.log(changed)

//   let score = []

//   score = changed.map((el, idx) => {
//     if (!isNaN(Number(el))) return el
//     if (el === "t") return "10"
//     if (el === "S") return `*1`
//     if (el === "D") return `*${changed[idx - 1]}`
//     if (el === "T") return `*${changed[idx - 1]}*${changed[idx - 1]}`
//     if (el === "A") return `*2`
//     if (el === "B") return `*2*${changed[idx - 1]}`
//     if (el === "C") return `*2*${changed[idx - 1]}*${changed[idx - 1]}`
//     if (el === "E") return `*(-1)`
//     if (el === "F") return `*(-1)*${changed[idx - 1]}`
//     if (el === "G") return `*(-1)*${changed[idx - 1]}*${changed[idx - 1]}`
//   })
//   console.log(score)
//   let test = []
//   for (let i = 0; i < score.length; i = i + 2) {
//     test.push(score[i] + score[i + 1])
//   }
//   console.log(test)
//   console.log(eval(test.join("+")))
// }
