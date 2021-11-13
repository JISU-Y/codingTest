// 행렬의 덧셈
function solution(arr1, arr2) {
  var answer = []
  for (let i = 0; i < arr1.length; i++) {
    let combinedArr = []
    for (let j = 0; j < arr1[0].length; j++) {
      combinedArr.push(arr1[i][j] + arr2[i][j])
    }
    answer.push(combinedArr)
  }

  return answer

  // return arr1.map((a_el,idx) => a_el.map((in_a_el, jdx) => in_a_el + arr2[idx][jdx]));
  // in_a_el이 곧 arr1[idx][jdx]
}

let arr1 = [[1], [2]]
let arr2 = [[3], [4]]
console.log(solution(arr1, arr2))
