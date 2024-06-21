import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import "../assets/estilos/contacto.module.css";

function Contacto() {
  const { saludar, pokemones, traemePokemones } = useContext(Contexto);

  console.log("antes del boton", pokemones);
  const handleClick = () => {
    traemePokemones();
    console.log("despues del boton", pokemones);
  };

  return (
    <>
      <h1>Contacto</h1>
      <button onClick={handleClick}>all Pokes</button>
    </>
  );
}

export default Contacto;
