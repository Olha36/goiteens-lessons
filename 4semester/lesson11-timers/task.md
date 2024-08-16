`Створіть таймер, який відлічує задану кількість хвилин та секунд до нуля. Після досягнення нульового значення виведіть повідомлення "Час вийшов!".`

`Розробіть секундомір, який показує час з точністю до мілісекунд. Включіть можливість запуску, призупинки та скидання секундоміра. Виводьте час на екран у форматі "години:хвилини:секунди.мілісекунди".`

0:0:0:0

2. Додаткові завдання

`Створити таймер, який буде починати відлік з 10 секунд та зменшувати час кожну мілісекунду. При досягненні 5 секунд, таймер повинен змінювати колір фону сторінки на червоний.`

`Реалізуйте годинник, який показує поточний час у форматі "години:хвилини:секунди". Оновлюйте годинник кожну секунду.`

3. Творчі завдання
`Створіть анімацію, використовуючи таймер, яка змінює розмір елемента на сторінці з плавним збільшенням та зменшенням. Анімація повинна циклічно повторюватися.`

`Створіть таймер, який має можливість налаштування часу (години, хвилини, секунди) з використанням елементів керування на сторінці (наприклад, input або select). Після досягнення встановленого часу виведіть повідомлення "Таймер завершено!".`


let startTime;
let timerInterval;
let running = false;
let pausedTime = 0;

function interval() {
  timerInterval = setInterval(() => {
    const currentTime = new Date();
    const elapsedTime = currentTime - startTime + pausedTime;
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = elapsedTime % 1000;
    
    console.log(`${hours}:${minutes}:${seconds}.${milliseconds}`);
  }, 1000);
}


function startTimer() {
  if(!running) {
    startTime = new Date()
    interval();
    running = true;  
  }
}
function stopTimer() {
  if (running) {
    clearInterval(timerInterval);
    pausedTime += new Date() - startTime;
    running = false;
  }
}
function resetTimer() {
  clearInterval(timerInterval);
  running = false;
  pausedTime = 0;
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
