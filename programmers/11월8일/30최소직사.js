// 최소 직사각형
function solution(sizes) {
  let arr = sizes.map((size) => {
    return size.sort((a, b) => b - a)
  }) // 사이즈 일괄 적용 (가로가 더 크게)

  let w = arr.map((el) => el[0]).sort((a, b) => b - a)[0] // 다시 첫번째 요소만 찾아서 sorting후 제일 큰거
  let h = arr.map((el) => el[1]).sort((a, b) => b - a)[0]

  // ..ㅠㅠ
  return w * h
}

let sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]

solution(sizes)

// Math.max를 이용,,, ??
function solution(sizes) {
  const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
  return hor * ver
}

// sizes를 forEach로 돌면서
let w = 0
let h = 0
sizes.forEach((s) => {
  const [a, b] = s.sort((a, b) => a - b) // 오름차순 정리
  // a랑 b를 max로 업데이트 한다.
  if (a > h) h = a
  if (b > w) w = b
})
return w * h
