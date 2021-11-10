// 약수의 개수와 덧셈
function solution(left, right) {
  let sum = 0
  for (let num = left; num <= right; num++) {
    let numCount = 0
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        if (i === Math.sqrt(num)) numCount += 0.5
        else numCount++
      }
    }
    console.log(num, numCount * 2)
    if (isEven(numCount * 2)) {
      sum += num
    } else {
      sum -= num
    }
  }

  return sum
}

function isEven(num) {
  return num % 2 === 0 ? true : false
}

solution(13, 17) // 43
solution(24, 27) // 52

// 다른 사람 풀이
// 제곱근이 정수이면 약수의 개수가 홀수
function solution(left, right) {
  var answer = 0
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i
    } else {
      answer += i
    }
  }
  return answer
}
