// Q.5 majority Element

function findMajority(arr) {
  let count = 0;
  let candi = 0;
  for (let i = 0; i < arr.length; i++) {
    if (count == 0) {
      candi = arr[i];
    }
    if (candi == arr[i]) {
      count++;
    } else {
      count--;
    }
  }
  return candi;
}
let array = [2, 1, 3, 2, 5, 2, 2];
console.log(findMajority(array));
