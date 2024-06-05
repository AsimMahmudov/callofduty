import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Prop from "./components/pages/prop/Prop";
import Rig from "./components/pages/rig/Rig";
import Grop from "./components/pages/grop/Grop";
import Home from "./components/pages/Home/Home";
import Footer from "./components/footer/Footer";
import Register from "./components/pages/registr/Register";
import Sign from "./components/pages/sign/Sign";
import Online from "./components/pages/alim/online/Online";
import Xbox from "./components/pages/Osob/Xbox";
import Ples from "./components/pages/Osob/Ples";
import Comp from "./components/pages/Osob/Comp";
import Zombie from "./components/pages/alim/zombie/Zombie";
import Maka from "./components/pages/alim/maka/Maka";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/battlepass" element={<Prop />} />
        <Route path="/ricochet" element={<Rig />} />
        <Route path="/mw3" element={<Grop />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Online" element={<Online />} />
        <Route path="/Zombie" element={<Zombie />} />
        <Route path="/Maka" element={<Maka />} />
        <Route path="/Comp" element={<Comp />} />
        <Route path="/Ples" element={<Ples />} />
        <Route path="/Xbox" element={<Xbox />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
