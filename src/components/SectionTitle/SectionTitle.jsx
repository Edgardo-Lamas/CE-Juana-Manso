import './SectionTitle.css';

function SectionTitle({
    title,
    subtitle,
    align = 'left', // 'left' | 'center'
    badge,
    dark = false
}) {
    const className = `section-header section-header--${align} ${dark ? 'section-header--dark' : ''}`;

    return (
        <div className={className}>
            {badge && (
                <span className="section-header__badge">{badge}</span>
            )}
            <h2 className="section-header__title">{title}</h2>
            <div className="section-header__line" />
            {subtitle && (
                <p className="section-header__subtitle">{subtitle}</p>
            )}
        </div>
    );
}

export default SectionTitle;
