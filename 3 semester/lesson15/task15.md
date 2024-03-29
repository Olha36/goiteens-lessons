1. Розібрати приклад 
// у нас є масив з ім'ям та прізвищем
let arr = ["Ilya", "Kantor"];


// деструктурируюче присвоювання
// записує firstName = arr[0]
// та surname = arr[1]
let [firstName, surname] = arr;


console.log(firstName); // Ilya
console.log(surname);  // Kantor

Продемонструвати та пояснити приклади деструктуризації об’єкту (приклади коду можна використати з конспекту)
Продемонструвати та пояснити приклади деструктуризації об’єкту зі значеннями за замовчуванням (приклади коду можна використати з конспекту)
Продемонструвати та пояснити приклади глибокої деструктуризації об’єкту 
let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
 
  // деструктуризація разбита на декілька рядків для розуміння
  const {
    size: { // покладемо size сюди
      width,
      height
    },
    items: [item1, item2], // додамо елементи до items
    title = "Menu" // відсутня в об'єкті (використовується значення за замовчуванням)
  } = options;
 
  console.log(title);  // Menu
  console.log(width);  // 100
  console.log(height); // 200
  console.log(item1);  // Cake
  console.log(item2);  // Donut
