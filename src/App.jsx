import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarrihnoProvider } from "./context/CarrinhoContext";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import PaginaErro from "./pages/PaginaErro";

import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <CarrihnoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="*" element={<PaginaErro />} />
        </Routes>
      </CarrihnoProvider>
    </BrowserRouter>
  );
}

export default App;