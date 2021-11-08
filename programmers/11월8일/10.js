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

  // return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}

let arr1 = [[1], [2]]
let arr2 = [[3], [4]]
console.log(solution(arr1, arr2))
