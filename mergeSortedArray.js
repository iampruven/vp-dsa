//merge sorted array

//                     i
const arr1 = [9, 9, 9, 9, 9];
//                     j
const arr2 = [0];
//[-4, 0,3,4,6,30,31]

/*

cases:
1. if i <= j, take i, increment i
2. if j < i, take j, increment j
3. ??
4. ???

*/

function mergeSortedArray(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  let newArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    console.log(arr1[i], arr2[j]);
    if (j >= arr2.length || arr1[i] <= arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else if (i >= arr1.length || arr1[i] >= arr2[j]) {
      newArr.push(arr2[j]);
      j++;
    }
  }
  return newArr;
}

mergeSortedArray(arr1, arr2);
