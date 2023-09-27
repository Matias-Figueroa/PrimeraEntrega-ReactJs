import { Navbar } from "./components/layout/Navbar";
import { Home } from "./components/pages/home/Home";
import { Footer } from "./components/layout/Footer";
import { Login } from "./components/pages/login/Login";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  let saludo = "Bienvenido";

  return (
    <div>
      {/* navbar*/}
      <Navbar />
      {/*contenido*/}
      <Login />
      <ItemListContainer saludo={saludo} />
      <Home />
      {/*footer*/}
      <Footer />
    </div>
  );
}

export default App;
