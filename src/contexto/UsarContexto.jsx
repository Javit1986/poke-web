import Contexto from "./Contexto";
import Reducer from "./Reducer";
import { useReducer } from "react";
import axios from "axios";

function UsarContexto(props) {
  const { children } = props;
  const estadoInicial = {
    pokemones: [{ name: "pikachu", url: "" }],
    favoritos: [],
  };

  const [state, dispatch] = useReducer(Reducer, estadoInicial); //el useReducer hace que se cargue en state lo del dispatch

  //console.log("ESTO ES state:" + state);

  const saludar = (nombre) => {
    alert("Holaaa " + nombre);
  };

  const traemePokemones = async () => {
    const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon/");

    dispatch({ type: "LISTA_POKES", payload: respuesta.data.results });
  };

  const traemePokeFav = async () => {
    dispatch({ type: "DAME_POKE", payload: state.favoritos });
  };

  const guardaPoke = (item) => {
    //console.log("guardamoss:" + item);
    dispatch({ type: "GUARDA_POKE", payload: item });

    console.log(
      "los favoritos son: " + JSON.stringify(state.favoritos, null, 2)
    );
  };

  return (
    <>
      <Contexto.Provider
        value={{
          saludar,
          guardaPoke,
          traemePokemones,
          traemePokeFav,
          pokemones: state.pokemones,
          favoritos: state.favoritos,
        }}
      >
        {children}
      </Contexto.Provider>
    </>
  );
}

export default UsarContexto;
