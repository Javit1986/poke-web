import { Link } from "react-router-dom";
import style from "../assets/estilos/header.module.css";
function Header() {
  return (
    <header>
      <nav className={style.headermenu}>
        <Link to={"/poke-web"}> Home </Link>
        {/*  <Link to={"/contacto"}> Contacto </Link> */}
        <Link to={"/pokemones"}> Pokemones </Link>
        <Link to={"/favoritos"}> Favoritos </Link>
      </nav>
    </header>
  );
}

export default Header;
