import { Link } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import style from "../assets/estilos/itemlist.module.css";

function ItemFav(props) {
  const { name, url } = props;
  const { guardaPoke } = useContext(Contexto);

  let urlCortada = url.split("/");
  // console.log(urlCortada); de aca se sacó que en la posicion 6 tenemos el nro del pokemon para armar la url nueva

  return (
    <>
      <div className={style.itemlist}>
        <Link to={"/pokemones/" + urlCortada[6]} className={style.itemtitulo}>
          {name}
        </Link>
      </div>
    </>
  );
}

export default ItemFav;
