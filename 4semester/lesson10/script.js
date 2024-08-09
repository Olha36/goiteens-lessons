console.log('Example 1: синхронний код'); 
console.log('Example 2: синхронний код'); 

setTimeout(() => {
  console.log('Example 3: асинхронний код'); 
}, 1000)

console.log('Example 4: синхронний код');
console.log('Example 5: синхронний код');
console.log('Example 6: синхронний код');


const setIntervalFunction = () => {
  console.log('Example 7: синхронний код');
};


const intervalID = setInterval(setIntervalFunction, 3000)

clearInterval(intervalID);

console.log('Example 8: синхронний код');
console.log('Example 9: синхронний код');
console.log('Example 10: синхронний код');
console.log('Example 11: синхронний код');

