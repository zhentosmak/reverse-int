module.exports = function reverse (n) {
    const reg = /\d/g
    const numStr = `${n}`.match(reg)
      let reverseNum = ''
    for (let i = numStr.length-1; i >= 0; i--) {
      reverseNum = reverseNum + numStr[i]
    }
    return +reverseNum
}
