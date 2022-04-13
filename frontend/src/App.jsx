import NavBar from "./pages/NavBar";
import MainGrid from "./pages/MainGrid";
import Footer from "./pages/Footer";

import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <NavBar />
        <MainGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
