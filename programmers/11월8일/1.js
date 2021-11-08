// 직사각형 별찍기
process.stdin.setEncoding("utf8")
process.stdin.on("data", (data) => {
  const n = data.split(" ")
  const a = Number(n[0]),
    b = Number(n[1])

  let stars = "" // 빈 string

  for (let i = 0; i < b; i++) {
    for (let i = 0; i < a; i++) {
      stars += "*" // ****
      //process.stdout.write('*') // 바로 * 출력
    }
    stars += "\n" //console.log()
  }

  console.log(stars)

  // 이렇게 하는 방법도 있다더라
  // const row = '*'.repeat(a)
  // for(let i =0; i < b; i++){
  //     console.log(row)
  // }

  //   for(let i =0; i < b; i++){
  //    console.log(Array(a).fill("*").join(""))
  //   }
})
