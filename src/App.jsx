import React, { useEffect, useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import { Products } from "./pages/Products";
import { Features } from "./pages/Features";
import { About } from "./pages/About";
import { DetailWomanProduct } from "./pages/DetailWomanProduct";
import { Men } from "./pages/Men";
import { DetailMenProduct } from "./pages/DetailMenProduct";
import { CreateAd } from "./pages/CreateAd";
import Ladies from "./pages/Ladies";

function App() {
  

  return (
    <div>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/ladies/" element={<Ladies />} />
        <Route path="/men/" element={<Men />} />
        <Route path="/ladies/:productId" element={<DetailWomanProduct />} />
        <Route path="/men/:productId" element={<DetailMenProduct />} />
        <Route path="/createad" element={<CreateAd />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
