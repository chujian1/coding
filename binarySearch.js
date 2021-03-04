// 使用二分查找法，在有序数组中查找给定元素的索引

const binarySearch = (arr, item) => {
  let left = 0, right = arr.length - 1, m
  while(left <= right) {
    m = Math.floor((left + right) / 2)
    if (arr[m] === item) return m
    if (arr[m] > item) right = m - 1
    else left = m + 1
  }
  return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 6))