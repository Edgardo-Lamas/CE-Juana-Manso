import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import InfoBanner from './components/InfoBanner';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import UnidadesTecnicas from './pages/UnidadesTecnicas';
import AreaAcademica from './pages/AreaAcademica';
import Proyectos from './pages/Proyectos';
import Impacto from './pages/Impacto';
import Alianzas from './pages/Alianzas';
import Contacto from './pages/Contacto';
import FichaTecnica from './pages/FichaTecnica';
import ActividadInstitucional from './pages/ActividadInstitucional';
import GuiaDelSitio from './pages/GuiaDelSitio';
import './index.css';

function App() {
  return (
    <Router basename="/CE-Juana-Manso">
      <div className="app">
        <InfoBanner />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/unidades-tecnicas" element={<UnidadesTecnicas />} />
          <Route path="/unidades-tecnicas/termomecanica" element={<FichaTecnica />} />
          <Route path="/area-academica" element={<AreaAcademica />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/impacto" element={<Impacto />} />
          <Route path="/alianzas" element={<Alianzas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/actividad-institucional" element={<ActividadInstitucional />} />
          <Route path="/guia" element={<GuiaDelSitio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
