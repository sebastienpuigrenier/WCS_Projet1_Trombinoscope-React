// import { BrowserRouter as Route, Routes } from "react-router-dom";
// import FicheMembre from "./pages/FicheMembre";

import NavBar from "./pages/NavBar";
import Main from "./pages/Main";
import Footer from "./pages/Footer";

import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <NavBar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
