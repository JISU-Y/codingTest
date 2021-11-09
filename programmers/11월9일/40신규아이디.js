// 신규 아이디 추천
function solution(new_id) {
  // 1. 대문자 -> 소문자
  // 2. .제외한 특수문자 제거
  // 3. 반복 . 하나로 통일
  let answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "")
  const len = answer.length
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len)
}
//.replace(/.+/g, ".") //.이 하나 이상인것 찾음

solution("...!@BaT#*..y.abcdefghijklm") // "bat.y.abcdefghi"
solution("z-+.^.") // "z--"

// function solution(new_id) {
//     const answer = new_id
//         .toLowerCase()
//         .replace(/[^\w-_.]/g, '') // w
//         .replace(/\.{2,}/g, '.')
//         .replace(/^\.|\.$/g, '')
//         .replace(/^$/, 'a')
//         .slice(0, 15).replace(/\.$/, '');
// const len = answer.length;
// return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// }
