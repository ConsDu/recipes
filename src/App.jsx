import * as bootstrap from 'bootstrap' //Import Bootstrap js
import { Route, Routes } from 'react-router-dom'
import Bookmarks from './pages/Bookmarks'
import Cremosas from './pages/Cremosas'
import Home from './pages/Home'
import HuevoCarne from './pages/HuevoCarne'
import Marineras from './pages/Marineras'
import NotFound from './pages/NotFound'
import Salsas from './pages/Salsas'
import Veganas from './pages/Veganas'
import SpecificRecipe from "./pages/SpecificRecipe"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/veganas" element={<Veganas />} />
      <Route path="/cremosas" element={<Cremosas />} />
      <Route path="/marineras" element={<Marineras />} />
      <Route path="/salsas" element={<Salsas />} />
      <Route path="/huevo-carne" element={<HuevoCarne />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/:id" element={<SpecificRecipe />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
