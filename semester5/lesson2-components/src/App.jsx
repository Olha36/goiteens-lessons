import "./App.css";
import React from "react";
import ProductsCard from "./Products";
import User from "./User";
import PropTypesExample from "./Proptypes";
import Greeting from './Greeting'

function App() {
  return (
    <>
      {/* variant 1 */}
      <ProductsCard name1="Coca-cola" name2="Fanta" price="30" />
      {/* variant 2 */}
      {/* <ProductsCard name1="Coca-cola" name2="Fanta" price="30" /> */}

      <User />
      <PropTypesExample>
        <p>Hello world!</p>
        <p>Helo 2</p>
      </PropTypesExample>
      <Greeting  text="Hello world"/>
    </>
  );
}

export default App;
