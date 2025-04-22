import "./App.css";
import Weather from "./Weather";
import Movies from "./Movies";
import Math from './Math'
import PersistentDrawerLeft from "./PersistentDrawerLeft";
import Example from './Example'

function App() {
  // пишемо джаваскрипт код

  let name = "Oleh";
  return (
    // пишемо HTML код
    <div className="container">

      <PersistentDrawerLeft />
      <Example />
      <h1>{name}</h1>
      <p>Вчимо розмітку JSX</p>
      <button>Click me</button>

      <ul>
        <li>Roses</li>
        <li>Lilacs</li>
        <li>Forget-me-nots</li>
      </ul>

      <form action="">
        <label htmlFor="">enter your name</label>
        <input type="text" />

        <select name="countries" id="">
          <option value="USA">USA</option>
          <option value="USA">Ukraine</option>
        </select>
      </form>

      <Movies />
      <Weather />
      <Math />

    </div>
  );
}

export default App;

// створити  елемент h1
// створити  елемент p
// створити  елемент div
// створити  елемент ul
// створити  елемент li
// створити  елемент button
// створити  елемент input
// створити  елемент form
// створити  елемент select
// створити об'єкт з даними про улюблений фільм: назва - зображення. Вивести назву фільму в h3, а зображення в img.
// створити дві змінні і обчислити різницю чисел. Вивести результат в р
// створити масив з назвами улюблених книг. За допомогою map виведіть кожну книгу в списку ul > li. Можна додати емоджі.
//
