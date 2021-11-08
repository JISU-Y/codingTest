// 소수 만들기
function solution(nums) {
  let sum = []
  let primeCount = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sum.push(nums[i] + nums[j] + nums[k])
      }
    }
  }
  //   // 0 1 2
  //   // 0 1 3
  //   // 0 2 3
  //   // 1 2 3
  //   console.log(sum)
  sum.map((num) => {
    if (isPrime(num)) primeCount++
  })

  return primeCount
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // num을 다 돌아도 되지만 sqrt 만 도는 것이 훨씬 효율적
    if (num % i === 0) return false
  }
  return true
}

let nums = [1, 2, 7, 6, 4]
// 1

solution(nums)

// sum = nums
// .filter((num, idx) => idx !== i)
// .reduce((acc, cur) => {
//   acc += cur
//   return acc
// })
