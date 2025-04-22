import "./App.css";
import ProductsCard from "./Products";
import User from './User'

function App() {
  return (
    <>
      {/* variant 1 */}
      <ProductsCard name1="Coca-cola" name2="Fanta" price="30" />
      {/* variant 2 */}
      {/* <ProductsCard name1="Coca-cola" name2="Fanta" price="30" /> */}

      <User />
    </>
  );
}

export default App;
