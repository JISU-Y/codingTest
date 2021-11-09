// 같은 숫자는 싫어
function solution(arr) {
  var answer = []

  arr.forEach((element, idx) => {
    if (arr[idx - 1] !== element) {
      answer.push(element)
    }
  })

  return answer

  // filter 사용 시
  // value 값을 그 다음 인덱스 거랑 비교해서 같으면 지워버림
  return arr.filter((val, index) => val != arr[index + 1])
}

solution([1, 1, 3, 3, 0, 1, 1])
