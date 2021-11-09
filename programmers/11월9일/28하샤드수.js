// 하샤드 수
function solution(x) {
  let sum = x
    .toString()
    .split("")
    .map((el) => parseInt(el))
    .reduce((acc, cur) => (acc += cur))

  return x % sum === 0 ? true : false
}

// num 으로 바꿔서 다 더하는건 다 똑같음

solution(10)
