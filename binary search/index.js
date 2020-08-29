const recursive = (x, arr, start, end) => {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === x) return true;
  //if mid is great then x
  if (arr[mid] > x) return recursive(x, arr, start, mid - 1);
  //if mid is less then x
  if (arr[mid] < x) return recursive(x, arr, mid + 1, end);
};
//Binary Search only Good for sorted array.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 99, 999, 99999999, 999999999999];
console.log(recursive(2, arr, 0, arr.length - 1));
