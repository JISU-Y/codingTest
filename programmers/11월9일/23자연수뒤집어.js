// 자연수 뒤집어 배열로 만들기
function solution(n) {
  let answer = n
    .toString()
    .split("")
    .reverse()
    .map((el) => parseInt(el))

  console.log(answer)

  return answer
}

solution(12345)

// 숫자풀이
function solutionNum(n) {
  let arr = []

  do {
    // 10으로 나눈 나머지니까 일의자리만 추출해서 배열에 집어넣기
    arr.push(n % 10) // 5   4   3
    n = Math.floor(n / 10) // 1234  123 12  1 이렇게 뒤에가 사라짐
  } while (n > 0)

  return arr
}
