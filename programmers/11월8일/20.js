// 완주하지 못한 선수
function solution(participant, completion) {
  let failed = ""

  // 제대로된 비교를 위해 알파벳 순 정렬
  participant.sort()
  completion.sort()

  // for문을 두번 돌리면 효율성의 문제가 생긴다
  // 0번 요소부터 비교해가면서 맞지 않는 idx가 나오면
  // 그 때의 participant의 i번째 요소가 완주하지 못한 선수가 됨
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      failed = participant[i]
      break
    }
  }

  return failed
}

// 시간초과
// function solution(participant, completion) {
//   let failed = ""
//   participant.forEach((el) => {
//     if (!completion.includes(el)) failed = el
//     else {
//       let filteredArr = []
//       participant.forEach((element) => {
//         if (!filteredArr.includes(element)) {
//           filteredArr.push(element)
//         } else {
//           failed = element
//         }
//       })
//     }
//   })

//   return failed
// }

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
