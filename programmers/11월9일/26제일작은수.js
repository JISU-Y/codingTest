// 제일 작은 수 제거하기
function solution(arr) {
  if (arr.length <= 1) {
    return [-1]
  } else {
    arr = arr.filter((el) => el !== Math.min(...arr)) // spread operator로 min 값 계산 가능
  }
  console.log(arr)
  return arr
}

solution([4, 3, 2, 1])

// 시간 초과
// function solution(arr) {
//     let tempArr = [...arr]

//     return arr.length === 1 ? [-1] : arr.filter((el, idx) => idx !== arr.indexOf(tempArr.sort()[0]))
// }
