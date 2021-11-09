// 로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
  let hashed = []
  let match = 0

  lottos.forEach((num) => {
    hashed[num] = hashed[num] ? hashed[num] + 1 : 1
  })
  win_nums.forEach((num) => {
    hashed[num] = hashed[num] ? hashed[num] - 1 : -1
  })

  for (let key in hashed) {
    if (hashed[key] === 0) {
      match++ // win num과 맞는 수의 개수
    }
  }
  // 0의 개수(안보이는 수)
  let invi_num = hashed[0] ? hashed[0] : 0 // 0이 없으면 0으로 저장
  // 0의 개수가 다 맞거나 다 틀리거나

  let best = match + invi_num === 0 ? 1 : match + invi_num // 최고성적 => 원래 맞은 수의 개수 + 0의 개수
  let lost = match === 0 ? 1 : match // 최저성적 => 원래 맞은 수의 개수 (+ 0이 아무것도 안맞을 때 = 0)

  return [7 - best, 7 - lost] // 7의 보수
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])
solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])
solution([0, 0, 0, 0, 0, 1], [38, 19, 20, 40, 15, 25])
solution([0, 0, 0, 0, 0, 15], [38, 19, 20, 40, 15, 25])
solution([1, 2, 3, 4, 5, 6], [38, 19, 20, 40, 15, 25])
solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])
