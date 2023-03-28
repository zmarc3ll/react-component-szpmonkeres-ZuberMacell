import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar-component';
import Footer from './components/footer-component';
import Fooldal from './components/pages/Fooldal';
import SzakmaiTapasztalat from './components/pages/SzakmaiTapasztalat';
import IdopontFoglalas from './components/pages/IdopontFoglalas';

function App() {
  return (
    <><Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Fooldal />} />
      <Route path='/tapasztalat' element={<SzakmaiTapasztalat />} />
      <Route path='/idopont' element={<IdopontFoglalas />} />
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
