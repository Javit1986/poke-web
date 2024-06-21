import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../componentes/Layout";
import Home from "../contenedores/Home";
import Contacto from "../contenedores/Contacto";
import Favoritos from "../contenedores/Favoritos";
import Pokemones from "../contenedores/Pokemones";
import Pokemon from "../contenedores/Pokemon";
import UsarContexto from "../contexto/UsarContexto";
function App() {
  return (
    <BrowserRouter>
      <UsarContexto>
        <Layout>
          <Routes>
            <Route path="/poke-web" element={<Home />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
            <Route path="/pokemones" element={<Pokemones />}></Route>
            <Route path="/pokemones/*" element={<Pokemon />}></Route>
          </Routes>
        </Layout>
      </UsarContexto>
    </BrowserRouter>
  );
}

export default App;
