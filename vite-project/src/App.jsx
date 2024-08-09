import './App.css';
import { PropTypes } from 'prop-types';
import Welcome from './welcome';

function App() {
  Year.propTypes = {
    year: PropTypes.number.isRequired,
  };

  Product.propTypes = {
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };

  function Year(props) {
    return <p>зараз {props.year} </p>;
  }

  const Test = () => {
    return (
      <img
        src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'
        alt='picture'
      />
    );
  };

  function Product({ name, imgUrl, alt }) {
    return (
      <div>
        <h1>{name}</h1>
        <img src={imgUrl} alt={alt} style={{ width: 100, height: 100 }} />
      </div>
    );
  }

  return (
    <>
      <div>
        <h1>МОДУЛЬ №2 Компоненти</h1>

        <div className='theory'>
          <p>
            <span className='bold'>Компоненти</span> дозволяють розділити інтерфейс користувача на
            незалежні частини, придатні до
          </p>
          <p>Компоненти можна перевикористовувати повторно і в поточному, і в новому проеккті</p>
          <p>Найпростішим способом визначення компонента є написання функції JavaScript:</p>
          приклад функціонального компоненту: <Welcome name='My favourite group' />
          <Year year={2024} />
          <p>Зробимо картку продукту компонентом-функцією:</p>
          <Product
            name='Телефон'
            imgUrl='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'
            alt='gif'
          />
        </div>
      </div>

      <Test />
    </>
  );
}

export default App;
