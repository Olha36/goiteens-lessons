import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Error404 from "./components/Error404";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <h1>React router dom lesson</h1>

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Error404 />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
