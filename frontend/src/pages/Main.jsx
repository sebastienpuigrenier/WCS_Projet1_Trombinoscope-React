import React from "react";
import { Route, Routes } from "react-router-dom";
import MainGrid from "./MainGrid";
import Apropos from "./Apropos";
import Equipe from "./Equipe";
import FicheMembre from "./FicheMembre";
import Erreur404 from "./Erreur404";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainGrid />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/FicheMembre/:membre" element={<FicheMembre />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </main>
  );
}

export default Main;
