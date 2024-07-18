// Створіть модуль  який містить функцію для знаходження середнього значення масиву чисел. 
export function average(numbers) { 
    
   const sum = numbers.reduce((newValue, currentValue) => newValue + currentValue, 0);
    const averageN = sum / numbers.length;
    console.log(averageN);
}