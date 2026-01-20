import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

function Hero({
    title,
    subtitle,
    description,
    primaryAction,
    secondaryAction,
    badge,
    variant = 'default', // 'default' | 'dark' | 'compact'
    align = 'left', // 'left' | 'center'
}) {
    const heroClass = `hero hero--${variant} hero--${align}`;

    return (
        <section className={heroClass}>
            <div className="container">
                <div className="hero__content">
                    {badge && (
                        <span className="hero__badge">{badge}</span>
                    )}

                    <h1 className="hero__title">{title}</h1>

                    {subtitle && (
                        <p className="hero__subtitle">{subtitle}</p>
                    )}

                    {description && (
                        <p className="hero__description">{description}</p>
                    )}

                    {(primaryAction || secondaryAction) && (
                        <div className="hero__actions">
                            {primaryAction && (
                                <Link to={primaryAction.href} className="btn btn--primary">
                                    {primaryAction.label}
                                    <ArrowRight size={16} />
                                </Link>
                            )}
                            {secondaryAction && (
                                <Link to={secondaryAction.href} className="btn btn--secondary">
                                    {secondaryAction.label}
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Línea decorativa inferior */}
            <div className="hero__line" />
        </section>
    );
}

export default Hero;
