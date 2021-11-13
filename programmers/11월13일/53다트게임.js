// [1차] 다트게임
function solution(dartResult) {
  let changed = dartResult.replace(/10/g, "t").split("")
  console.log(changed)

  let score = []

  score = changed.map((el, idx) => {
    if (!isNaN(Number(el))) return el
    if (el === "t") return "10"
    if (el === "S") return `*1+`
    if (el === "D") return `*${changed[idx - 1]}+`
    if (el === "T") return `*${changed[idx - 1]}*${changed[idx - 1]}+`
    if (el === "*") return "*2+"
    if (el === "#") return "*(-1)+"
  })
  console.log(score)
}

// solution("1S2D*3T") // 37
solution("1D2S#10S") // 9
// solution("1D2S0T") // 3
// solution("1S*2T*3S") // 23
// solution("1D#2S*3S") // 5
// solution("1T2D3D#") // -4
// solution("1D2S3T*") // 59
