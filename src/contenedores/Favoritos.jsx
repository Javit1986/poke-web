import { useEffect, useState, useContext } from "react";
import Contexto from "../contexto/Contexto";
import ItemFav from "../componentes/ItemFav";
import style from "../assets/estilos/favoritos.module.css";
import estilo from "../assets/estilos/titulo.module.css";

function Favoritos() {
  const { favoritos, traemePokeFav } = useContext(Contexto);

  useEffect(() => {
    traemePokeFav();
  }, []);
  console.log("favoritos: ", favoritos);

  return (
    <>
      {/*     <h1 className={estilo.titulo}>Favoritos</h1> */}
      {favoritos.length === 0 ? (
        <>
          <div className={style.colores}>
            <h2>No hay nada por acá...</h2>
            <h2>Selecciona tus pokes favoritos</h2>
          </div>
        </>
      ) : (
        <ul className={style.contenedor}>
          {favoritos.map((pokemon) => (
            <ItemFav {...pokemon} key={pokemon.name} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Favoritos;
