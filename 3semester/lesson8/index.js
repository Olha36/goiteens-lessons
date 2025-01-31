// const string = 'Tomorrow Ukraine will win';

// const split = string.split(' ');

// const split2 = string.split('');
// console.log(split);
// console.log(split2);

// const joinMeth = split.join('');
// const joinMeth2 = split2.join('');

// console.log(joinMeth)
// console.log(joinMeth2)

// const arr = ['cat', 'dog', 'monkey', 'bird', 'tiger'];

// const includesMeth = arr.includes('tiger');

// console.log(includesMeth);

// const indexMeth = arr.indexOf('bird');
// console.log(indexMeth);

// const pushMeth = arr.push('parrot');
// console.log(pushMeth);
// console.log(arr);

// const unshiftMeth = arr.unshift('lion');
// console.log(arr);

// const shiftMeth = arr.shift('');
// console.log(arr);


const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

const array3 = array1.concat(array2);
console.log(array3);

let sum = 0;
for (let i = 0; i < array3.length; i++) {
  sum += array3[i];  
  console.log(sum);
}
