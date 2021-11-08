// 서울에서 김서방 찾기
function solution(seoul) {
  // idx = seoul.indexOf('Kim') // 대문자로 안적어놓고..
  let husband = 0
  seoul.forEach((el, idx) => {
    if (el === "Kim") husband = idx
  })

  return `김서방은 ${husband}에 있다`
}

let seoul = ["Jane", "Kim"]

solution(seoul)
