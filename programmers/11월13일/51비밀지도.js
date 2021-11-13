// [1차] 비밀지도
function solution(n, arr1, arr2) {
  let mapArr = new Array(n)
  mapArr.map((el) => new Array(n))

  arr1 = arr1.map((el) => {
    let binary = el.toString(2)
    if (binary.length < n) {
      let zeroAttach = ""
      for (let i = 0; i < n - binary.length; i++) {
        zeroAttach += "0"
      }
      binary = zeroAttach + binary
    }
    return binary
  })

  arr2 = arr2.map((el) => {
    let binary = el.toString(2)
    if (binary.length < n) {
      let zeroAttach = ""
      for (let i = 0; i < n - binary.length; i++) {
        zeroAttach += "0"
      }
      binary = zeroAttach + binary
    }
    return binary
  })

  arr1 = arr1.map((el, idx) => {
    let mapStr = ""
    for (let i = 0; i < el.length; i++) {
      if (Number(el[i]) || Number(arr2[idx][i])) {
        mapStr += "#"
      } else {
        mapStr += " "
      }
    }
    el = mapStr
    return el
  })
  return arr1
}

// solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])
// ["#####","# # #", "### #", "# ##", "#####"]
solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])
// ["######", "### #", "## ##", " #### ", " #####", "### # "]

// n으로 n x n 배열 만듦
// arr1 숫자 요소들 2진법으로 변환 -> 5개로 채움
// arr2 도
// 배열 요소끼리 i j 비교해서 하나라도 1이면 #으로 만듦
// #이 포함된 배열 반환

// 다른 사람의 풀이
function solution(n, arr1, arr2) {
  return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) => (+a ? "#" : " ")))
}

const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s
}
