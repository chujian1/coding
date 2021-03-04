// 算术级数，给定初始大小以及限制，返回一个数字数组

const arithmeticProgression = (num, limit) => Array.from({length: Math.ceil(limit/num)}, (_, i) => (i + 1) * num)

console.log(arithmeticProgression(5, 25)) // [5, 10, 15, 20, 25]
console.log(arithmeticProgression(5, 27)) // [5, 10, 15, 20, 25, 30]