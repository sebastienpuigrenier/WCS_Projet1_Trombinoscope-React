import React from "react";
import { Route, Routes } from "react-router-dom";
import MainGrid from "./MainGrid";
import Apropos from "./Apropos";
import Equipe from "./Equipe";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainGrid />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/equipe" element={<Equipe />} />
      </Routes>
    </main>
  );
}

export default Main;
