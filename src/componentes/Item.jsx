import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Contexto from "../contexto/Contexto";
import style from "../assets/estilos/itemlist.module.css";

function Item(props) {
  const { name, url } = props;
  const { guardaPoke } = useContext(Contexto);
  const [isFavorite, setIsFavorite] = useState(false);

  let urlCortada = url.split("/");
  // console.log(urlCortada); de aca se sacó que en la posicion 6 tenemos el nro del pokemon para armar la url nueva

  let handleGuardar = () => {
    guardaPoke({ name: name, url: url });
    setIsFavorite(true);
  };

  return (
    <>
      <div className={style.itemlist}>
        <Link to={"/pokemones/" + urlCortada[6]} className={style.itemtitulo}>
          {name}
        </Link>

        {!isFavorite && <button onClick={handleGuardar}>es mi favorito</button>}
      </div>
    </>
  );
}

export default Item;
