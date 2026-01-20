import { Scale, FileText, Users, Building, BookOpen, Award } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { InfoCard } from '../components/Card';
import './QuienesSomos.css';

// Marco normativo
const marcoNormativo = [
    {
        icon: Scale,
        title: 'Base Legal',
        content: 'Operación conforme a la Ley Nacional de Educación N° 26.206 y normativas específicas del sistema penitenciario federal. Articulación con el Ministerio de Educación y el Servicio Penitenciario Federal.'
    },
    {
        icon: FileText,
        title: 'Habilitaciones',
        content: 'Unidades productivas habilitadas según disposiciones de seguridad e higiene. Certificaciones de competencias laborales con validez nacional conforme al marco de cualificaciones vigente.'
    },
    {
        icon: Users,
        title: 'Articulación',
        content: 'Convenios marco con instituciones educativas de nivel superior. Acuerdos de cooperación técnica con organismos públicos y entidades del tercer sector.'
    },
    {
        icon: Building,
        title: 'Supervisión',
        content: 'Supervisión educativa por autoridades competentes. Auditorías periódicas de calidad y cumplimiento normativo. Informes institucionales de gestión.'
    },
];

// Principios rectores
const principios = [
    {
        titulo: 'Legalidad',
        descripcion: 'Operación estricta conforme al ordenamiento jurídico vigente y protocolos institucionales establecidos.'
    },
    {
        titulo: 'Transparencia',
        descripcion: 'Documentación verificable de procesos, resultados y gestión de recursos institucionales.'
    },
    {
        titulo: 'Calidad Técnica',
        descripcion: 'Estándares de producción y formación alineados con requerimientos del sector productivo.'
    },
    {
        titulo: 'Trazabilidad',
        descripcion: 'Registro sistemático de actividades, certificaciones y resultados de gestión.'
    },
];

// Estructura organizacional
const estructura = [
    {
        area: 'Dirección',
        funcion: 'Conducción institucional, articulación con autoridades y representación externa.'
    },
    {
        area: 'Área Académica',
        funcion: 'Gestión de programas educativos formales, convenios universitarios y certificaciones.'
    },
    {
        area: 'Unidades Técnicas',
        funcion: 'Coordinación de talleres productivos, capacitación en oficios y ejecución de proyectos.'
    },
    {
        area: 'Área Administrativa',
        funcion: 'Gestión de recursos, documentación institucional y soporte operativo.'
    },
];

function QuienesSomos() {
    return (
        <main className="quienes-somos">
            <Hero
                badge="Información Institucional"
                title="Quiénes Somos"
                subtitle="Marco normativo, estructura y principios rectores"
                description="Presentación institucional de la Comunidad Educativa Juana Manso. Encuadre jurídico, organización operativa y fundamentos que orientan la gestión."
                variant="compact"
            />

            {/* Presentación Institucional */}
            <section className="section">
                <div className="container">
                    <div className="quienes-somos__presentacion">
                        <div className="quienes-somos__presentacion-main">
                            <SectionTitle
                                badge="Definición"
                                title="Naturaleza Institucional"
                            />

                            <p className="quienes-somos__texto">
                                La Comunidad Educativa Juana Manso constituye una unidad de ejecución
                                técnico-educativa que opera en contexto de encierro, articulando
                                formación académica formal con capacitación en oficios y producción
                                técnica supervisada.
                            </p>
                            <p className="quienes-somos__texto">
                                Su objeto institucional es el desarrollo de capacidades técnicas
                                y académicas verificables, documentadas conforme a estándares de
                                calidad y con trazabilidad de resultados ante organismos competentes.
                            </p>
                            <p className="quienes-somos__texto">
                                La estructura operativa comprende unidades de ejecución técnica
                                (talleres productivos), área académica (educación formal y
                                capacitación) y área administrativa (gestión y documentación).
                            </p>
                        </div>

                        <div className="quienes-somos__presentacion-aside">
                            <div className="quienes-somos__dependencia">
                                <h4>Dependencia Institucional</h4>
                                <p>
                                    Unidad operativa bajo supervisión del sistema educativo
                                    y el régimen penitenciario federal, conforme a la
                                    normativa de educación en contextos de encierro.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Referencia a Juana Manso */}
            <section className="section bg-gray">
                <div className="container">
                    <div className="quienes-somos__referencia">
                        <div className="quienes-somos__referencia-icon">
                            <BookOpen size={32} />
                        </div>
                        <div className="quienes-somos__referencia-content">
                            <h3>Juana Manso (1819-1875)</h3>
                            <p className="quienes-somos__referencia-sub">Referencia conceptual institucional</p>
                            <p>
                                La denominación institucional honra a Juana Manso, educadora, escritora
                                y precursora del sistema educativo argentino. Su legado representa los
                                valores de educación universal, formación ciudadana y acceso al conocimiento
                                como instrumento de transformación social.
                            </p>
                            <div className="quienes-somos__referencia-valores">
                                <div className="quienes-somos__valor">
                                    <Award size={18} />
                                    <span>Educación como derecho</span>
                                </div>
                                <div className="quienes-somos__valor">
                                    <Users size={18} />
                                    <span>Formación ciudadana</span>
                                </div>
                                <div className="quienes-somos__valor">
                                    <BookOpen size={18} />
                                    <span>Acceso al conocimiento</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Encuadre Legal */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        badge="Fundamentos"
                        title="Marco Jurídico-Institucional"
                        subtitle="Base normativa que regula las operaciones educativas y productivas en contexto de encierro."
                    />

                    <div className="grid grid--2">
                        {marcoNormativo.map((item, index) => (
                            <InfoCard key={index} icon={item.icon} title={item.title}>
                                <p>{item.content}</p>
                            </InfoCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Estructura Organizacional */}
            <section className="section bg-gray">
                <div className="container">
                    <SectionTitle
                        badge="Organización"
                        title="Estructura Operativa"
                        subtitle="Áreas funcionales y sus responsabilidades dentro de la institución."
                        align="center"
                    />

                    <div className="quienes-somos__estructura">
                        {estructura.map((item, index) => (
                            <div key={index} className="quienes-somos__estructura-item">
                                <h4>{item.area}</h4>
                                <p>{item.funcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Principios Rectores */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        badge="Valores Operativos"
                        title="Principios Rectores"
                        subtitle="Criterios que orientan la gestión institucional y las operaciones técnico-educativas."
                        align="center"
                    />

                    <div className="quienes-somos__principios">
                        {principios.map((principio, index) => (
                            <div key={index} className="quienes-somos__principio">
                                <span className="quienes-somos__principio-number">0{index + 1}</span>
                                <h3 className="quienes-somos__principio-title">{principio.titulo}</h3>
                                <p className="quienes-somos__principio-desc">{principio.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alianzas Preview */}
            <section className="section bg-gray">
                <div className="container">
                    <SectionTitle
                        badge="Red Institucional"
                        title="Articulación y Convenios"
                        subtitle="Vínculos formales con organismos públicos, instituciones educativas y entidades del tercer sector."
                        align="center"
                    />

                    <div className="quienes-somos__alianzas">
                        <div className="quienes-somos__alianza-item">
                            <span>Universidades Nacionales</span>
                        </div>
                        <div className="quienes-somos__alianza-item">
                            <span>Ministerio de Educación</span>
                        </div>
                        <div className="quienes-somos__alianza-item">
                            <span>Servicio Penitenciario Federal</span>
                        </div>
                        <div className="quienes-somos__alianza-item">
                            <span>Organismos de Derechos Humanos</span>
                        </div>
                        <div className="quienes-somos__alianza-item">
                            <span>Cámaras Sectoriales</span>
                        </div>
                        <div className="quienes-somos__alianza-item">
                            <span>ONGs Especializadas</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default QuienesSomos;
