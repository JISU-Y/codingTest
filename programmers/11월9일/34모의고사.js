// 모의고사
// 너무 오래걸려 수정 필요
function solution(answers) {
  const mathDumb1 = [1, 2, 3, 4, 5]
  const mathDumb2 = [2, 1, 2, 3, 2, 4, 2, 5]
  const mathDumb3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  let count1 = 0,
    count2 = 0,
    count3 = 0
  let i = 0

  answers.forEach((answer, idx) => {
    console.log(answer, mathDumb1[i])
    if (answer === mathDumb1[i++]) {
      count1++
    }
    if ((idx + 1) % 5 === 0) i = 0
  })
  i = 0
  answers.forEach((answer, idx) => {
    console.log(answer, mathDumb2[i])
    if (answer === mathDumb2[i++]) {
      count2++
    }
    if ((idx + 1) % 8 === 0) i = 0
  })
  i = 0
  answers.forEach((answer, idx) => {
    console.log(answer, mathDumb3[i])
    if (answer === mathDumb3[i++]) {
      count3++
    }
    if ((idx + 1) % 10 === 0) i = 0
  })

  let maxScore = Math.max(count1, count2, count3)
  let answer = [count1, count2, count3]
    .map((el, idx) => {
      if (el === maxScore) return idx + 1
    })
    .filter((el) => el !== undefined)

  console.log(answer)

  return answer
}

// solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]) // [1]
solution([1, 3, 2, 4, 2]) // [1,2,3]
