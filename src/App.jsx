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
import AllNewAds from "./pages/AllNewAds";
import NewAd from "./pages/NewAd";
import EditAd from "./pages/EditAd";
import Background from "./components/Background/Background";

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  const data = [
    { text1: "Stay Trendy", text2: "Discover the latest styles." },
    { text1: "Great Deals", text2: "Find affordable fashion." },
    { text1: "Express Yourself", text2: "Shop your unique style." },
  ];
  const [homeCount, setHomeCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(true);

  return (
    <div>
      <div className={`container ${theme}`}>
        <NavBar theme={theme} setTheme={setTheme} />
        <Background playStatus={playStatus} homeCount={homeCount} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              homeCount={homeCount}
              setHomeCount={setHomeCount}
              setPlayStatus={setPlayStatus}
              playStatus={playStatus}
            />
          }
        />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/ladies/" element={<Ladies />} />
        <Route path="/men/" element={<Men />} />
        <Route path="/ladies/:productId" element={<DetailWomanProduct />} />
        <Route path="/men/:productId" element={<DetailMenProduct />} />
        <Route path="/createad" element={<CreateAd />} />{" "}
        <Route path="/newads" element={<AllNewAds />} />
        <Route path="/newads/:productId" element={<NewAd />} />
        <Route path="/editad/:productId" element={<EditAd />} />
      </Routes>
    </div>
  );
}

export default App;
