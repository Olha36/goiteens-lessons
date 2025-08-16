import "./App.css";
import JokeFetcher from "./components/UseEffect/JokeFetcher";
import PersistentName from "./components/UseEffect/PersistentName";
import ClickCounter from "./components/UseState/Counter";
import LightSwitch from "./components/UseState/ToggleLight";

// хуки - спеціальні функції в реакті, які дозволяють зберігати стан, реагувати на події життєвого циклу, взамодіяти з ДОМ

function App() {
  return (
    <>
      <div>
        <p>Приклад Counter з useState</p>
        <ClickCounter />
        <p>Приклад Перемикач світла з useState</p>
        <LightSwitch />
        <p>Приклад жартів з useFetch</p>
        <JokeFetcher />
        <p>Приклад імені з useFetch</p>
        <PersistentName />
      </div>
    </>
  );
}

export default App;
