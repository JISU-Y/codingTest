// 폰켓몬
function solution(nums) {
  let nNums = new Set(nums)
  return [...nNums].length >= nums.length / 2 ? nums.length / 2 : [...nNums].length
}

solution([3, 1, 2, 3]) // 2
solution([3, 3, 3, 2, 2, 4]) // 3
solution([3, 3, 3, 2, 2, 2]) // 2
