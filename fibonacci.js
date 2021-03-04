// 输出特定长度l的斐波那契数列

const fibonacci = l => Array.from({length: l}).reduce((prev, val, i) => prev.concat(i > 1 ? prev[i - 1] + prev[i - 2] : i), [])

console.log(fibonacci(8)) // [0, 1, 1, 2, 3, 5, 8, 13] 