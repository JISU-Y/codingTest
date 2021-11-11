// 신규 아이디 추천
function solution(new_id) {
  // 1. 대문자 -> 소문자 =>
  // 2. .제외한 특수문자 제거 => /[^\w-_.]/ 모든 문자랑 -, _, . 이 아닌 것
  // 3. 반복 . 하나로 통일 => /\.{2,}/ => .이 최소 2번 이상 있는 애
  // 4. 마침표 처음이나 끝이면 지움 => /^\.|\.$/ ^. .이 맨 앞에 있거나, .$ 맨 뒤에 있는 애
  // 5. 빈문자열이면 a 넣기 => /^$/ 빈문쟈?
  // 6. 16자 이상이면 뒤에 자르기 => .slice(0, 15)
  // 7. 자르고 뒤에 .있으면 지우기 => /\.$/ .뒤에 있는 애 찾음
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
