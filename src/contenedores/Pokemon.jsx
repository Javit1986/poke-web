import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import image from "../assets/background.png";
import "./Pokemon.css";
import estilo from "../assets/estilos/titulo.module.css";

function Pokemon() {
  const ubicacion = useLocation();
  const [pokemon, setPokemon] = useState();

  const traemepok = async () => {
    const pedazos = ubicacion.pathname.split("/");
    const url = "https://pokeapi.co/api/v2/pokemon/" + pedazos[2];
    const respuesta = await axios.get(url);
    setPokemon(respuesta.data);
  };

  useEffect(() => {
    traemepok();
  }, []);

  return (
    <div className="pokemon-container">
      <h1 className={estilo.titulo}>{pokemon?.name}</h1>
      <div className="image-container">
        {/*  <img src={image} className="background-image" alt="Background" /> */}
        <img
          src={pokemon?.sprites.other["official-artwork"].front_default}
          className="pokemon-image"
          alt={pokemon?.name}
        />
      </div>
    </div>
  );
}

export default Pokemon;
