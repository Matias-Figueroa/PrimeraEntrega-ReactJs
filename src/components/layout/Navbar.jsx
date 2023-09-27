import CartWidget from "../common/cartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h4>Logo</h4>
      <ul>
        <li>Inico</li>
        <li>Productos</li>
        <li>Contactos</li>
      </ul>
      <CartWidget />
    </div>
  );
};
