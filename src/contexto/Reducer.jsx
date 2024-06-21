const LISTA_POKES = "LISTA_POKES";
const DAME_POKE = "DAME_POKE";
const GUARDA_POKE = "GUARDA_POKE";

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case LISTA_POKES:
      return { ...state, pokemones: payload };
    case DAME_POKE:
      return { ...state, favoritos: payload };

    case GUARDA_POKE:
      return { ...state, favoritos: [...state.favoritos, payload] };
    default:
      return state; // Siempre devuelve el estado actual por defecto
  }
}
