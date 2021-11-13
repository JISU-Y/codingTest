// 완주하지 못한 선수
// function solution(participant, completion) {
//   let failed = ""

//   // 제대로된 비교를 위해 알파벳 순 정렬
//   participant.sort()
//   completion.sort()

//   // for문을 두번 돌리면 효율성의 문제가 생긴다
//   // 0번 요소부터 비교해가면서 맞지 않는 idx가 나오면
//   // 그 때의 participant의 i번째 요소가 완주하지 못한 선수가 됨
//   for (let i = 0; i < participant.length; i++) {
//     if (participant[i] !== completion[i]) {
//       failed = participant[i]
//       break
//     }
//   }

//   return failed
// }

// 해시 사용
function solutionHash(participant, completion) {
  let hashed = []
  participant.forEach((entry) => {
    // 사람 이름을 key 값으로 배열에 저장한다.
    // 그리고 그 사람이름이 만약에 배열에 이미 있으면 1을 더해주고
    // 아니면 그냥 1
    // 그러면 사람 모두가 1이상의 수를 가지게 된다 (동명이인이면 2이상)
    hashed[entry] = hashed[entry] ? hashed[entry] + 1 : 1
  })
  // completion을 돌면서
  // hashed key값을 돌면서 1씩 빼준다(완주했다는 것을 의미)
  completion.forEach((entry) => {
    hashed[entry] = hashed[entry] - 1
  })

  // 만약 1이 안빠졌으면(2에서 1이 되었든 1인데 안사라졌든)
  // 그 사람이 완주 못한 것!
  for (let key in hashed) {
    if (hashed[key] >= 1) return key
  }
}

// solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
solutionHash(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])

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
