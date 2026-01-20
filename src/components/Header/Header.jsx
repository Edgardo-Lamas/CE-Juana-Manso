import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const navigation = [
  { name: 'Inicio', path: '/' },
  { name: 'Quiénes Somos', path: '/quienes-somos' },
  { name: 'Unidades Técnicas', path: '/unidades-tecnicas' },
  { name: 'Área Académica', path: '/area-academica' },
  { name: 'Proyectos', path: '/proyectos' },
  { name: 'Impacto', path: '/impacto' },
  { name: 'Alianzas', path: '/alianzas' },
  { name: 'Actividad', path: '/actividad-institucional' },
  { name: 'Contacto', path: '/contacto' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <div className="header__logo-icon">
            <span>CE</span>
          </div>
          <div className="header__logo-text">
            <span className="header__logo-name">Comunidad Educativa</span>
            <span className="header__logo-subtitle">Juana Manso</span>
          </div>
        </Link>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            {navigation.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="header__menu-btn"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
