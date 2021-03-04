// 左旋转字符串
// 将字符串前边若干个字段移动到尾部组成新的字符串

const revertLeftWords = (str, i) => str.slice(i) + str.slice(0, i)

console.log(revertLeftWords('abcdef', 3)) // defabc