//핸드폰 번호 가리기
function solution(phone_number) {
  const back = phone_number.slice(-4)
  const front = "*".repeat(phone_number.length - 4)
  // padStart(phone_number.length, '*')
  return front + back
}

let s = "01033334444"

console.log(solution(s))
