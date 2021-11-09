// 두개 뽑아서 더하기
function solution(numbers) {
  let leng = numbers.length
  let sums = []
  for (let i = 0; i < leng; i++) {
    for (let j = i + 1; j < leng; j++) {
      if (!sums.includes(numbers[i] + numbers[j])) sums.push(numbers[i] + numbers[j])
    }
  }
  return sums.sort((a, b) => a - b)
}

solution([2, 1, 3, 4, 1])

// set 활용하여 중복된 요소 없애기
function solution(numbers) {
  const temp = []

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j])
    }
  }

  const answer = [...new Set(temp)]

  return answer.sort((a, b) => a - b)
}
