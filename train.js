[false, 1, 0, 1, 2, 0, 1, 3, 'a'];
[false, 1, 1, 2, 1, 3, 'a', 0, 0];
let arr1 = [];
let counter = 0;

function moveZeros(arr) {
  arr.map((el) => {
    if (el !== 0) {
      arr1.push(el);
      counter++;
    }
  });
  for (let i = 0; i < arr.length - counter; i++) {
    arr1.push(0);
  }
  console.log(arr1);
  console.log(arr.length - counter);
  return arr1;
}
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']);
