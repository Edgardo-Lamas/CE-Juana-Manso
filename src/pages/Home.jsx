import { Link } from 'react-router-dom';
import {
    Wrench,
    GraduationCap,
    BarChart3,
    Users,
    Shield,
    ArrowRight,
    Building2,
    FileText,
    Handshake,
    Award,
    Clock,
    BookOpen
} from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { CapabilityCard, MetricCard } from '../components/Card';
import './Home.css';

// Pilares institucionales (4 pilares)
const pilares = [
    {
        icon: Shield,
        title: 'Disciplina y Organización',
        descripcion: 'Estructura operativa basada en protocolos institucionales, supervisión permanente y cumplimiento normativo.'
    },
    {
        icon: Wrench,
        title: 'Formación Técnica Aplicada',
        descripcion: 'Capacitación en oficios con equipamiento habilitado, certificaciones laborales y producción supervisada.'
    },
    {
        icon: GraduationCap,
        title: 'Formación Académica y Jurídica',
        descripcion: 'Programas educativos formales, articulación universitaria y formación en derechos ciudadanos.'
    },
    {
        icon: BarChart3,
        title: 'Impacto Social Medible',
        descripcion: 'Indicadores verificables de formación, empleabilidad y articulación institucional documentada.'
    },
];

// Unidades técnicas (resumen)
const unidadesResumen = [
    {
        icon: Wrench,
        nombre: 'Carpintería y Mobiliario',
        capacidad: 'Fabricación de mobiliario institucional según especificaciones técnicas.'
    },
    {
        icon: Building2,
        nombre: 'Construcción y Albañilería',
        capacidad: 'Ejecución de obras menores y mantenimiento edilicio certificado.'
    },
    {
        icon: FileText,
        nombre: 'Serigrafía y Gráfica',
        capacidad: 'Producción gráfica institucional y señalética normativa.'
    },
];

// Métricas institucionales (dashboard)
const metricas = [
    { valor: '+12.000', etiqueta: 'Horas de formación', icono: Clock, descripcion: 'impartidas (2020-2024)' },
    { valor: '8', etiqueta: 'Programas activos', icono: BookOpen, descripcion: 'en ejecución' },
    { valor: '+580', etiqueta: 'Certificaciones', icono: Award, descripcion: 'emitidas' },
    { valor: '12', etiqueta: 'Alianzas vigentes', icono: Handshake, descripcion: 'con organismos' },
];

// Alianzas institucionales
const alianzas = [
    'Universidad de Buenos Aires',
    'Universidad Tecnológica Nacional',
    'Ministerio de Educación',
    'Ministerio de Trabajo',
    'Servicio Penitenciario Federal',
    'Universidad Nacional de La Plata',
];

function Home() {
    return (
        <main className="home">
            {/* ===== HERO INSTITUCIONAL ===== */}
            <section className="home__hero">
                <div className="container">
                    <div className="home__hero-content">
                        <span className="home__hero-badge">Portfolio Institucional de Capacidades</span>
                        <h1 className="home__hero-title">
                            Comunidad Educativa<br />Juana Manso
                        </h1>
                        <p className="home__hero-subtitle">
                            Unidad de Ejecución Técnica y Formación Académica Superior
                            en Contexto de Encierro
                        </p>
                        <div className="home__hero-actions">
                            <Link to="/unidades-tecnicas" className="btn btn--primary">
                                Ver capacidades técnicas
                                <ArrowRight size={16} />
                            </Link>
                            <Link to="/impacto" className="btn btn--secondary">
                                Métricas institucionales
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="home__hero-line" />
            </section>

            {/* ===== DECLARACIÓN INSTITUCIONAL ===== */}
            <section className="home__declaracion">
                <div className="container">
                    <div className="home__declaracion-content">
                        <p className="home__declaracion-texto">
                            Estructura institucional dedicada a la formación técnica y académica
                            de personas privadas de libertad. Operamos bajo supervisión judicial
                            y educativa, con protocolos documentados, resultados verificables
                            y articulación con organismos públicos y del tercer sector.
                        </p>
                        <p className="home__declaracion-enfasis">
                            Formación técnica y académica con impacto institucional verificable.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== PILARES INSTITUCIONALES ===== */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        badge="Estructura Operativa"
                        title="Pilares Institucionales"
                        subtitle="Marco operativo que sustenta las capacidades técnicas y académicas de la institución."
                        align="center"
                    />

                    <div className="home__pilares">
                        {pilares.map((pilar, index) => (
                            <div key={index} className="home__pilar">
                                <div className="home__pilar-icon">
                                    <pilar.icon size={28} />
                                </div>
                                <h3 className="home__pilar-title">{pilar.title}</h3>
                                <p className="home__pilar-desc">{pilar.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== UNIDADES DE EJECUCIÓN TÉCNICA ===== */}
            <section className="section bg-gray">
                <div className="container">
                    <div className="home__unidades-header">
                        <div>
                            <SectionTitle
                                badge="Departamentos Operativos"
                                title="Unidades de Ejecución Técnica"
                                subtitle="Áreas productivas con equipamiento habilitado, personal certificado y capacidad de ejecución documentada."
                            />
                        </div>
                    </div>

                    <div className="home__unidades-grid">
                        {unidadesResumen.map((unidad, index) => (
                            <div key={index} className="home__unidad">
                                <div className="home__unidad-icon">
                                    <unidad.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="home__unidad-nombre">{unidad.nombre}</h4>
                                    <p className="home__unidad-capacidad">{unidad.capacidad}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="home__unidades-cta">
                        <Link to="/unidades-tecnicas" className="btn btn--primary">
                            Ver catálogo completo de unidades
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== MÉTRICAS INSTITUCIONALES (DASHBOARD) ===== */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        badge="Indicadores Verificables"
                        title="Métricas Institucionales"
                        subtitle="Datos objetivos de operación, formación y articulación institucional."
                        align="center"
                    />

                    <div className="home__dashboard">
                        {metricas.map((metrica, index) => (
                            <div key={index} className="home__metrica">
                                <div className="home__metrica-icon">
                                    <metrica.icono size={24} />
                                </div>
                                <div className="home__metrica-valor">{metrica.valor}</div>
                                <div className="home__metrica-etiqueta">{metrica.etiqueta}</div>
                                <div className="home__metrica-desc">{metrica.descripcion}</div>
                            </div>
                        ))}
                    </div>

                    <div className="home__dashboard-cta">
                        <Link to="/impacto" className="btn btn--secondary">
                            Ver informe completo de impacto
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== VALIDACIÓN Y ALIANZAS ===== */}
            <section className="section home__validacion bg-gray">
                <div className="container">
                    <SectionTitle
                        badge="Red Institucional"
                        title="Validación y Alianzas"
                        subtitle="Articulación documentada con organismos públicos, universidades y entidades del tercer sector."
                        align="center"
                    />

                    <div className="home__alianzas">
                        {alianzas.map((alianza, index) => (
                            <div key={index} className="home__alianza">
                                <span>{alianza}</span>
                            </div>
                        ))}
                    </div>

                    <p className="home__validacion-nota">
                        Convenios marco vigentes y acuerdos de cooperación formalizados
                        ante autoridades competentes.
                    </p>
                </div>
            </section>

            {/* ===== CIERRE INSTITUCIONAL ===== */}
            <section className="section home__cierre">
                <div className="container">
                    <div className="home__cierre-content">
                        <h2>Información para Convenios y Cooperación</h2>
                        <p>
                            Documentación institucional, informes técnicos y portfolio
                            de proyectos disponibles para organismos interesados en
                            articulación o colaboración.
                        </p>
                        <div className="home__cierre-actions">
                            <Link to="/alianzas" className="btn btn--primary">
                                Áreas de cooperación
                                <ArrowRight size={16} />
                            </Link>
                            <Link to="/contacto" className="btn btn--secondary">
                                Contacto institucional
                            </Link>
                            <Link to="/proyectos" className="btn btn--ghost">
                                Ver portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
