// 4 вправа (д/з)

//1. Знайти інпут, кнопку та абзац

// 2. навісити на кнопку обробник подій
// 3. перевірити чи працює (вивести в консоль будь яке повідомленння при кліку)
// 4. всередині функцї, яка має виводитися при кліку оголосити змінну та помістити 
// в нову змінну значення інпуту за допомогою .value. Значення інпуту перетворити на числове
// 5. використати інструкцію switch, в умові вказати назву змінної, яка містить значення інпуту 
// 6. За допомогою кейсів написати умову при якій 12 місяць, 1 і 2 - це зимові, 3-5 це весняні, 6-8 літні, а 9-11 - осінні

// 1 вправа
// 1. знайти батьківський елемент, який містить назви напоїв
// 2. до батьківськго елементу додати обробник подій
// 3. у функції, яка виконується при кліку знайти значення селектів та помістити в змінну
// 4. прописати умову switch з 3 кейсами (сік, кава, чай)


//2
const day = document.querySelector('.day');
console.log(day);

const button = document.querySelector('.day-button');
console.log(button)
const p = document.querySelector('.show-day');
console.log(p);

function handleButtonClick() {
  console.log('hi');
  const weekendValue = day.value;

  switch(weekendValue) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
      alert('it is a week day');
    break;
    case 'saturday':
    case 'sunday':
      alert('it is a weekend');
    break;
    default:
      alert('it is not a day of the week');
    break;
  }
}

button.addEventListener('click', handleButtonClick);



