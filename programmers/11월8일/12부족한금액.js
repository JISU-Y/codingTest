//부족한 금액 계산하기
function solution(price, money, count) {
  let totalCharge = 0
  totalCharge = Array(count)
    .fill(price)
    .map((p, idx) => (idx + 1) * p)
    .reduce((acc, cur) => {
      return (acc += cur)
    })

  return totalCharge > money ? totalCharge - money : 0
}

let price = 3
let money = 20
let count = 4

solution(price, money, count)

// 가우스 공식 이용
// 1부터x까지의 합 = n*(n+1)/2
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money
  return tmp > 0 ? tmp : 0
}
