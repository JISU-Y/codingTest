// 최소 직사각형
function solution(sizes) {
  let arr = sizes.map((size) => {
    return size.sort(function (a, b) {
      return b - a
    })
  })

  let w = arr
    .map((el) => {
      return el[0]
    })
    .sort(function (a, b) {
      return a - b
    })[sizes.length - 1]
  let h = arr
    .map((el) => {
      return el[1]
    })
    .sort(function (a, b) {
      return a - b
    })[sizes.length - 1]

  return w * h
}

let sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]

solution(sizes)

// Math.max를 이용,,, 무슨 말이지
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
