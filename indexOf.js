// 线性查找数组中给定元素的第一个索引值

const indexOf = (arr, item) => {
  for(let i in arr) {
    // i为string
    if (arr[i] === item ) return +i
  }
  return -1
}

console.log(indexOf([1, 2, 3, 4, 4], 4))