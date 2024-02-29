// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0)
//   console.log(i);
// }


// for (let i= 1; i <= 10; i++) {
//   console.log(i * 7);
// }


const array = ['Oleh', 'Danya', 'Nastya', 'Erik', 'Yura', 'Nazar', 'Edward', 'Vanya', '8'];
console.log(array.length);
console.log(array);

for (arr of array) {
  // console.log(arr + '!');

  if(arr === 'Nazar') {
    break;
   
  }
  console.log(arr);

}

// const num = ['1', '2', '3', '4', '5', '6', '7', '8'];
// console.log(Number(num[0]) + Number(num[1]) + Number(num[2]) + Number(num[4]))