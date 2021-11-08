// 2016년
function solution(a, b) {
  var answer = ""
  let daysOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  // 2/6은 31 + 6일 = 37일째 7을 나누면 5째주, 2가 남으니 토요일(목요일이 7의 배수)
  // 5/24는 31, 29, 31, 30 = 121 + 24 = 145 = 20*7 + 5 => 화요일
  let monSum = daysOfMonth.reduce((acc, cur, idx) => {
    if (idx < a - 1) acc += cur
    return acc
  }, 0)

  monSum += b

  if (monSum % 7 === 0) {
    answer = "THU"
  } else if (monSum % 7 === 1) {
    answer = "FRI"
  } else if (monSum % 7 === 2) {
    answer = "SAT"
  } else if (monSum % 7 === 3) {
    answer = "SUN"
  } else if (monSum % 7 === 4) {
    answer = "MON"
  } else if (monSum % 7 === 5) {
    answer = "TUE"
  } else {
    answer = "WED"
  }
  //혹은 DAY들도 배열로..

  return answer
}

let a = 5
let b = 24

console.log(solution(a, b))

// Date 메서드 활용
// function getDayName(a,b){
//     var date = new Date(2016, (a - 1), b); // month는 월을 의미하는 0~11까지의 정수
//       return date.toString().slice(0, 3).toUpperCase();
// }
