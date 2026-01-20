import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="container">
                    <div className="footer__grid">
                        {/* Columna 1: Información institucional */}
                        <div className="footer__col">
                            <div className="footer__logo">
                                <div className="footer__logo-icon">
                                    <span>CE</span>
                                </div>
                                <div className="footer__logo-text">
                                    <span className="footer__logo-name">Comunidad Educativa</span>
                                    <span className="footer__logo-subtitle">Juana Manso</span>
                                </div>
                            </div>
                            <p className="footer__description">
                                Unidad ejecutora de capacidades técnicas y académicas.
                                Portfolio institucional de formación en oficios y
                                educación formal en contexto de encierro.
                            </p>
                        </div>

                        {/* Columna 2: Enlaces institucionales */}
                        <div className="footer__col">
                            <h4 className="footer__title">Institucional</h4>
                            <ul className="footer__links">
                                <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
                                <li><Link to="/unidades-tecnicas">Unidades de Ejecución</Link></li>
                                <li><Link to="/area-academica">Área Académica</Link></li>
                                <li><Link to="/impacto">Métricas e Impacto</Link></li>
                            </ul>
                        </div>

                        {/* Columna 3: Documentación */}
                        <div className="footer__col">
                            <h4 className="footer__title">Documentación</h4>
                            <ul className="footer__links">
                                <li><Link to="/proyectos">Portfolio de Proyectos</Link></li>
                                <li><Link to="/proyectos">Informes Técnicos</Link></li>
                                <li><Link to="/alianzas">Alianzas y Convenios</Link></li>
                                <li><Link to="/contacto">Contacto Institucional</Link></li>
                            </ul>
                        </div>

                        {/* Columna 4: Contacto */}
                        <div className="footer__col">
                            <h4 className="footer__title">Contacto Institucional</h4>
                            <ul className="footer__contact">
                                <li>
                                    <MapPin size={16} />
                                    <span>Dirección institucional, Ciudad</span>
                                </li>
                                <li>
                                    <Phone size={16} />
                                    <span>+54 (000) 000-0000</span>
                                </li>
                                <li>
                                    <Mail size={16} />
                                    <span>contacto@cejuanamanso.edu.ar</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Barra inferior */}
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-content">
                        <p className="footer__copyright">
                            © {currentYear} Comunidad Educativa Juana Manso.
                            Todos los derechos reservados.
                        </p>
                        <p className="footer__legal">
                            Unidad de ejecución técnica y académica en contexto de encierro.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
