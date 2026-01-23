import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Info } from 'lucide-react';
import './InfoBanner.css';

const STORAGE_KEY = 'infoBannerDismissed';

function InfoBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // No mostrar en la página de guía
        if (location.pathname === '/guia') {
            setIsVisible(false);
            return;
        }

        // Verificar si fue cerrado anteriormente
        const dismissed = localStorage.getItem(STORAGE_KEY);
        if (!dismissed) {
            setIsVisible(true);
        }
    }, [location.pathname]);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem(STORAGE_KEY, 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="info-banner">
            <div className="info-banner__content">
                <Info size={18} className="info-banner__icon" />
                <span className="info-banner__text">
                    Versión de revisión interna para la comisión.
                </span>
                <Link to="/guia" className="info-banner__link">
                    Ver Guía del Sitio →
                </Link>
            </div>
            <button
                className="info-banner__close"
                onClick={handleDismiss}
                aria-label="Cerrar banner"
            >
                <X size={18} />
            </button>
        </div>
    );
}

export default InfoBanner;
