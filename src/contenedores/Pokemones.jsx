import { useEffect, useState, useContext } from "react";
import Contexto from "../contexto/Contexto";
//import axios from "axios";
import Item from "../componentes/Item";
import "../assets/estilos/pokemones.module.css";
import style from "../assets/estilos/pokemones.module.css";

function Pokemones() {
  const { pokemones, traemePokemones } = useContext(Contexto);
  // const [pokemones, setPokemones] = useState([]);
  // const traemepokes = async () => {
  // const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon/");
  //setPokemones(respuesta.data.results);
  // };
  useEffect(() => {
    //console.log("soy useEffect");
    //traemepokes();
    traemePokemones();
  }, []);
  return (
    <>
      {/*     <h1 className={estilo.titulo}>Pokemones</h1>; */}
      <ul className={style.contenedor}>
        {pokemones.map((pokemon) => (
          <Item {...pokemon} key={pokemon.name}></Item>
        ))}
      </ul>
    </>
  );
}

export default Pokemones;
