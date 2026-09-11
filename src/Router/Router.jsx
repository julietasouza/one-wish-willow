import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Story from "../pages/Story"
import Ritual from "../pages/Ritual"
import Catalog from "../pages/Catalog"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Story" element={<Story />} />
      <Route path='/Ritual' element={<Ritual />} />
      <Route path='/Catalog' element={<Catalog />} />
    </Routes>
  )
}

export default Router