// 체육복
function solution(n, lost, reserve) {
  let training = new Array(n)

  training.fill(1)
  for (let i = 0; i < reserve.length; i++) {
    training[reserve[i] - 1]++
  }
  for (let i = 0; i < lost.length; i++) {
    training[lost[i] - 1]--
  }
  console.log(training)

  training = training.map((el, idx) => {
    if (el === 0) {
      if (training[idx - 1] === 2) {
        training[idx - 1] = 1
        return el + 1
      } else if (training[idx + 1] === 2) {
        training[idx + 1] = 1
        return el + 1
      } else return el
    } else return el
  })

  console.log(training)
  training = training.filter((el) => el > 0)
  console.log(training)
  return training.length
}

// solution(5, [2, 4], [1, 3, 5]) // 5
// solution(5, [2, 4], [3]) // 4
// solution(3, [3], [1]) // 2
solution(4, [2, 3, 4], [3]) // 2

// 먼저 1을 다 채우고
// lost에 있는 애들의 idx는 0으로
// reserve에 있는 애들의 idx는 2로 만들어주면
// 대충 [2,0,2,0,2] 가 나옴
// 그럼 옆에 있는 거 최대한 1로 채우면
// [1,1,1,1,2] 정도가 나옴
// 그러면 모두가 양수이기 때문에 5명이 수업을 들을 수 있음

// function solution(n, lost, reserve) {
//     let tmp = reserve.slice()

//     for (let i in tmp) {
//       let key = lost.indexOf(tmp[i])

//       if (key != -1) {
//         lost.splice(key, 1);
//         reserve.splice(reserve.indexOf(tmp[i]), 1);
//       }
//     }

//     for (let i of reserve) {
//       let key = lost.includes(i-1) ? lost.indexOf(i-1) : lost.indexOf(i+1)

//       if (key != -1) {
//         lost.splice(key, 1)
//       }
//     }

//     return n - lost.length
//   }
