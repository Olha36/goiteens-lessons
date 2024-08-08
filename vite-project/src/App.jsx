import './App.css';
import PropTypes from 'prop-types';

function App() {
  Welcome.propTypes = {
    name: PropTypes.string.isRequired,
  };

  Product.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };
  Profile.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  };
  function Welcome(props) {
    return <h1>Привіт, {props.name}!</h1>;
  }

  function Product({ imgUrl, name, price }) {
    return (
      <>
        <div>
          <img src={imgUrl} alt={name} width='640' />
          <h2>{name}</h2>
          <p>Price: {price}$</p>
          <button type='button'>Add to cart</button>
        </div>
      </>
    );
  }

  function Profile({ name, email }) {
    return (
      <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
    )
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
          приклад функціонального компоненту: <Welcome name='React' />
          <p>Зробимо картку продукту компонентом-функцією:</p>
        </div>

        <div>
          <h1>Best selling products</h1>
          <Product
            imgUrl='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640'
            name='Tacos With Lime'
            price={10.99}
          />
          <Product
            imgUrl='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640'
            name='Fries and Burger'
            price={14.29}
          />
        </div>

        <Profile name='Olha' email='olha@gmail.com' />
      </div>
    </>
  );
}

export default App;
