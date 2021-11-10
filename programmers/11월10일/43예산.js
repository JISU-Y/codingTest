// 예산
function solution(d, budget) {
  let sortedD = d.sort()
  let sum = 0
  let idx = 0
  for (idx = 0; idx < sortedD.length; idx++) {
    if (sum + sortedD[idx] > budget) break // 더해서 budget 넘어가면 break
    sum += sortedD[idx]
  }

  return idx
}

solution([1, 3, 2, 5, 4], 9) // 3
solution([2, 2, 3, 3], 10) // 4
