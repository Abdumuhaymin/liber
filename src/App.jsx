import { Home } from "./pages/home";
import { MainLayout } from "./main-layout/main-Layout";
import { Routes, Route } from "react-router-dom";
import ProductCard from "./components/product-card/product-card";
import AudioCard from "./components/product-card/audio-csrd";
import MainDefult from "./components/defult-card/main-defult";
import Obuna from "./components/defult-card/obuna/obuna";
import Xisob from "./components/defult-card/xisob/xisob";
import Kitoblar from "./components/defult-card/kitoblar/kitoblar";
import Saqlangan from "./components/defult-card/saqlanganlar/saqlangan";
import Sozlamalar from "./components/defult-card/sozlamalar/sozlamalar";
import TungiRejim from "./components/defult-card/Тунги-режим/Тунги-режим";
import Xisob2 from "./components/defult-card/xisob2/xisob2";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/Newbooks/:slug" element={<ProductCard />} />
          <Route path="/Audiobooks/:slug" element={<AudioCard />} />
          <Route path="MainDefult" element={<MainDefult/>}>
            <Route index  element={<Obuna/>}/>
            <Route path="xisob" element={<Xisob/>}/>
            <Route path="kitoblar" element={<Kitoblar/>}/>
            <Route path="saqlash" element={<Saqlangan/>}/>
            <Route path="sozlamalar" element={<Sozlamalar/>}/>
            <Route path="tungirejim" element={<TungiRejim/>}/>
            <Route path="xisob2" element={<Xisob2/>}/>
          </Route>
          <Route path="*" element={<h1>page not founted</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
