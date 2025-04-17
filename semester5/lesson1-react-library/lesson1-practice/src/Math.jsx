export default function Math({ num1 = 5, num2 = 5 }) {
  function calculate() {
    return num1 * num2;
  }

  const books = [
    "Harry Potter",
    "The Lord of the Rings",
    "The Hobbit",
    "The picture of Dorian Grey",
  ];

  return (
    <div>
      <p>Результат обчислення:</p>
      <span>{calculate(num1, num2)}</span>
      {books.map((book, index) => (
        <ul key={index}>
          <li>{book}</li>
        </ul>
      ))}
    </div>
  );
}
//  Створити елемент p з текстом "Результат обчислення:", а під ним - елемент span, в який ви помістите результат
// обчислення простої математичної операції (наприклад, додавання, віднімання, множення або ділення) двох чисел, що
// зберігаються в змінних. Наприклад, якщо у вас є змінні num1 та num2, то виведіть їх суму, різницю, добуток чи частку.
