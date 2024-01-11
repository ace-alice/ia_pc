/*
 * base64解码
 * @param {Object} str
 */
const base64DecodeChars = [
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26,
  27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
  46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1,
]
export function base64decode(str: string) {
  let c1, c2, c3, c4
  let i, out
  const len: number = str.length
  i = 0
  out = ''
  while (i < len) {
    /* c1 */
    do {
      c1 = base64DecodeChars[str.charCodeAt(i++) & 0xFF]
    } while (i < len && c1 === -1)
    if (c1 === -1) {
      break
    }
    /* c2 */
    do {
      c2 = base64DecodeChars[str.charCodeAt(i++) & 0xFF]
    } while (i < len && c2 === -1)
    if (c2 === -1) {
      break
    }
    out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4))
    /* c3 */
    do {
      c3 = str.charCodeAt(i++) & 0xFF
      if (c3 === 61) {
        return htmlDecodeByRegExp(out)
      }
      c3 = base64DecodeChars[c3]
    } while (i < len && c3 === -1)
    if (c3 === -1) {
      break
    }
    out += String.fromCharCode(((c2 & 0xF) << 4) | ((c3 & 0x3C) >> 2))
    /* c4 */
    do {
      c4 = str.charCodeAt(i++) & 0xFF
      if (c4 === 61) {
        return htmlDecodeByRegExp(out)
      }
      c4 = base64DecodeChars[c4]
    } while (i < len && c4 === -1)
    if (c4 === -1) {
      break
    }
    out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
  }
  return htmlDecodeByRegExp(out)
}

function htmlDecodeByRegExp(str: string) {
  let temp = ''
  if (str.length === 0) {
    return ''
  }
  temp = str.replace(/&amp;/g, '&')
  temp = temp.replace(/&lt;/g, '<')
  temp = temp.replace(/&gt;/g, '>')
  temp = temp.replace(/&nbsp;/g, ' ')
  temp = temp.replace(/&#39;/g, '\'')
  temp = temp.replace(/&quot;/g, '"')
  return temp
}