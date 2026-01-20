import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Card.css';

// Tarjeta de Capacidad/Unidad Técnica
export function CapabilityCard({ icon: Icon, title, description, items, link }) {
    return (
        <div className="capability-card">
            <div className="capability-card__header">
                {Icon && (
                    <div className="capability-card__icon">
                        <Icon size={24} />
                    </div>
                )}
                <h3 className="capability-card__title">{title}</h3>
            </div>

            {description && (
                <p className="capability-card__description">{description}</p>
            )}

            {items && items.length > 0 && (
                <ul className="capability-card__list">
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}

            {link && (
                <Link to={link.href} className="capability-card__link">
                    {link.label}
                    <ArrowRight size={14} />
                </Link>
            )}
        </div>
    );
}

// Tarjeta de Métrica/Estadística
export function MetricCard({ value, label, description }) {
    return (
        <div className="metric-card">
            <div className="metric-card__value">{value}</div>
            <div className="metric-card__label">{label}</div>
            {description && (
                <p className="metric-card__description">{description}</p>
            )}
        </div>
    );
}

// Tarjeta de Proyecto/Documento
export function ProjectCard({ category, title, description, date, tags }) {
    return (
        <div className="project-card">
            {category && (
                <span className="project-card__category">{category}</span>
            )}
            <h3 className="project-card__title">{title}</h3>
            {description && (
                <p className="project-card__description">{description}</p>
            )}
            <div className="project-card__footer">
                {date && <span className="project-card__date">{date}</span>}
                {tags && tags.length > 0 && (
                    <div className="project-card__tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="project-card__tag">{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

// Tarjeta de Información Simple
export function InfoCard({ icon: Icon, title, children }) {
    return (
        <div className="info-card">
            {Icon && (
                <div className="info-card__icon">
                    <Icon size={20} />
                </div>
            )}
            <h4 className="info-card__title">{title}</h4>
            <div className="info-card__content">{children}</div>
        </div>
    );
}
