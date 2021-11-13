// 키패드 누르기
function solution(numbers, hand) {
  // 1, 4, 7이 나오면 무조건 L을 출력
  // 3,6,9가 나오면 무조건 R을 출력
  // 2,5,8,0나오면
  // 일단 현재위치에서 가장 가까운 거로
  // 거리 같으면 왼손/오른손 잡이 마다 다름
  let clicked = ""
  let row = new Array(3).fill(0) // * # 포함된 키패드 (현재 위치 확인용)
  let position = new Array(3).fill(row)

  // left -1 *에서 시작
  // right 1 #에서 시작
  position.push([-1, 0, 1])
  console.log(position)

  numbers.forEach((num) => {
    if (num % 3 === 1) {
      // 1 4 7 일 때
      clicked += "L"
      position.map((pos, i) => {
        return pos.map((el, j) => {
          if (el === -1) return 0
          else return el
        })
      })
      position[Math.floor(num / 3)][(num % 3) - 1] = -1
    } else if (num % 3 === 0 && num > 0) {
      // 3 6 9 일 때
      clicked += "R"
      position.map((pos, i) => {
        return pos.map((el, j) => {
          if (el === 1) return 0
          else return el
        })
      })
      position[num / 3 - 1][(num % 3) + 2] = 1
    } else if (num % 3 === 2 || num === 0) {
      // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
      // 2 5 8 0 일 때
      let leftMove = Math.abs(num - 1 - position.indexOf(-1))
      let rightMove = Math.abs(num - 1 - position.indexOf(1))
      if (leftMove < rightMove) {
        // 왼쪽이 더 가까울 때
        position[position.indexOf(-1)] = 0
        position[num - 1] = -1
      } else if (leftMove > rightMove) {
        // 오른쪽이 더 가까울 때
        position[position.indexOf(1)] = 0
        position[num - 1] = 1
      } else if ((leftMove % 2 === 0 || leftMove % 2 <= 6) && (rightMove % 2 === 0 || rightMove % 2 <= 6)) {
        // 칸이 같을 때
        if (hand === "left") {
          // 왼손잡이
          position[position.indexOf(-1)] = 0
          position[num - 1] = -1
        } else if (hand === "right") {
          // 오른손잡이
          position[position.indexOf(1)] = 0
          position[num - 1] = 1
        }
      }
    }
  })
}
// 한 칸은 1 3 차
// 두 칸은 2 4 6차
// 세 칸은 5 7 9차
// 네 칸은 8 10 차
// 0   1   2
// 3   4   5
// 6   7   8
// 9   10  11

// 00   01   02
// 10   11   12
// 20   21   22
// 30   31   32
solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right") // "LRLLLRLLRRL"
solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left") // "LRLLRRLLLRR"
solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right") // "LLRLLRLLRL"

// if (num % 3 === 1) {
//     // 1 4 7 일 때
//     clicked += "L"
//     position[][] = 0
//     position[num - 1] = -1
//   } else if (num % 3 === 0 && num > 0) {
//     // 3 6 9 일 때
//     clicked += "R"
//     position[position.indexOf(1)] = 0
//     position[num - 1] = 1
//   } else if (num % 3 === 2 || num === 0) {
//     // 2 5 8 0 일 때
//     let leftMove = Math.abs(num - 1 - position.indexOf(-1))
//     let rightMove = Math.abs(num - 1 - position.indexOf(1))
//     if (leftMove < rightMove) {
//       // 왼쪽이 더 가까울 때
//       position[position.indexOf(-1)] = 0
//       position[num - 1] = -1
//     } else if (leftMove > rightMove) {
//       // 오른쪽이 더 가까울 때
//       position[position.indexOf(1)] = 0
//       position[num - 1] = 1
//     } else if ((leftMove % 2 === 0 || leftMove % 2 <= 6) && (rightMove % 2 === 0 || rightMove % 2 <= 6)) {
//       // 칸이 같을 때
//       if (hand === "left") {
//         // 왼손잡이
//         position[position.indexOf(-1)] = 0
//         position[num - 1] = -1
//       } else if (hand === "right") {
//         // 오른손잡이
//         position[position.indexOf(1)] = 0
//         position[num - 1] = 1
//       }
//     }
//   }
