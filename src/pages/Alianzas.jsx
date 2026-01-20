import { Link } from 'react-router-dom';
import {
    Handshake,
    Building2,
    GraduationCap,
    Globe,
    ArrowRight,
    CheckCircle2,
    Users,
    FileText
} from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import './Alianzas.css';

// Tipos de alianzas
const tiposAlianza = [
    {
        icon: GraduationCap,
        tipo: 'Académicas',
        descripcion: 'Convenios con universidades e instituciones de educación superior para extensión de programas y certificaciones.',
        ejemplos: ['Universidad de Buenos Aires', 'Universidad Nacional de La Plata', 'Universidad Tecnológica Nacional']
    },
    {
        icon: Building2,
        tipo: 'Gubernamentales',
        descripcion: 'Articulación con organismos estatales para ejecución de políticas públicas y programas de formación.',
        ejemplos: ['Ministerio de Educación', 'Ministerio de Trabajo', 'Servicio Penitenciario Federal']
    },
    {
        icon: Globe,
        tipo: 'Tercer Sector',
        descripcion: 'Cooperación con ONGs nacionales e internacionales en proyectos de desarrollo y capacitación.',
        ejemplos: ['Organismos de Derechos Humanos', 'Fundaciones educativas', 'Cooperativas de trabajo']
    },
    {
        icon: Users,
        tipo: 'Sectoriales',
        descripcion: 'Vinculación con cámaras empresariales y sindicatos para formación en oficios y empleabilidad.',
        ejemplos: ['Cámaras industriales', 'Sindicatos de oficios', 'Asociaciones profesionales']
    },
];

// Convenios vigentes
const conveniosVigentes = [
    {
        institucion: 'Universidad de Buenos Aires',
        programa: 'Programa UBA XXII',
        alcance: 'Extensión de carreras de grado',
        estado: 'Vigente',
        desde: '2010'
    },
    {
        institucion: 'Universidad Tecnológica Nacional',
        programa: 'Tecnicaturas Superiores',
        alcance: 'Formación técnica superior',
        estado: 'Vigente',
        desde: '2018'
    },
    {
        institucion: 'Ministerio de Trabajo',
        programa: 'Certificación de Competencias',
        alcance: 'Habilitación para certificar formación profesional',
        estado: 'Vigente',
        desde: '2015'
    },
    {
        institucion: 'Universidad Nacional de La Plata',
        programa: 'Extensión Universitaria',
        alcance: 'Carreras de grado y capacitación',
        estado: 'Vigente',
        desde: '2016'
    },
];

// Áreas de cooperación
const areasCooperacion = [
    {
        area: 'Formación Académica',
        descripcion: 'Extensión de programas educativos formales y capacitación docente.',
        requerimientos: ['Convenio marco institucional', 'Acreditación ante autoridad educativa']
    },
    {
        area: 'Capacitación Técnica',
        descripcion: 'Desarrollo de cursos especializados y certificación de competencias.',
        requerimientos: ['Propuesta pedagógica', 'Recursos humanos y materiales']
    },
    {
        area: 'Producción',
        descripcion: 'Ejecución de proyectos productivos con supervisión técnica.',
        requerimientos: ['Especificaciones técnicas', 'Acuerdo de provisión']
    },
    {
        area: 'Investigación',
        descripcion: 'Proyectos de investigación aplicada y documentación institucional.',
        requerimientos: ['Protocolo de investigación', 'Aval institucional']
    },
];

function Alianzas() {
    return (
        <main className="alianzas">
            <Hero
                badge="Red Institucional"
                title="Alianzas y Cooperación"
                subtitle="Articulación con organismos e instituciones"
                description="Marco de cooperación institucional para organismos públicos, universidades, ONGs y entidades interesadas en articular programas de formación, capacitación o producción técnica."
                variant="compact"
            />

            {/* Tipos de Alianzas */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        badge="Categorías"
                        title="Tipos de Alianzas Institucionales"
                        subtitle="Modalidades de articulación según tipo de organismo y naturaleza de la cooperación."
                    />

                    <div className="alianzas__tipos">
                        {tiposAlianza.map((tipo, index) => (
                            <div key={index} className="alianzas__tipo">
                                <div className="alianzas__tipo-header">
                                    <div className="alianzas__tipo-icon">
                                        <tipo.icon size={24} />
                                    </div>
                                    <h3>{tipo.tipo}</h3>
                                </div>
                                <p className="alianzas__tipo-desc">{tipo.descripcion}</p>
                                <div className="alianzas__tipo-ejemplos">
                                    {tipo.ejemplos.map((ejemplo, i) => (
                                        <span key={i} className="alianzas__tipo-tag">{ejemplo}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Convenios Vigentes */}
            <section className="section bg-gray">
                <div className="container">
                    <SectionTitle
                        badge="Red Activa"
                        title="Convenios Vigentes"
                        subtitle="Acuerdos formales de cooperación actualmente en ejecución."
                        align="center"
                    />

                    <div className="alianzas__convenios-tabla">
                        <table>
                            <thead>
                                <tr>
                                    <th>Institución</th>
                                    <th>Programa</th>
                                    <th>Alcance</th>
                                    <th>Desde</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {conveniosVigentes.map((convenio, index) => (
                                    <tr key={index}>
                                        <td className="alianzas__convenio-inst">{convenio.institucion}</td>
                                        <td>{convenio.programa}</td>
                                        <td>{convenio.alcance}</td>
                                        <td>{convenio.desde}</td>
                                        <td>
                                            <span className="alianzas__estado alianzas__estado--vigente">
                                                {convenio.estado}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Áreas de Cooperación */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        badge="Oportunidades"
                        title="Áreas de Cooperación"
                        subtitle="Líneas de trabajo disponibles para articulación con organismos externos."
                    />

                    <div className="alianzas__areas">
                        {areasCooperacion.map((area, index) => (
                            <div key={index} className="alianzas__area">
                                <h3>{area.area}</h3>
                                <p>{area.descripcion}</p>
                                <div className="alianzas__area-req">
                                    <h4>Requerimientos:</h4>
                                    <ul>
                                        {area.requerimientos.map((req, i) => (
                                            <li key={i}>
                                                <CheckCircle2 size={14} />
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Invitación a Cooperar */}
            <section className="section alianzas__cta bg-primary">
                <div className="container">
                    <div className="alianzas__cta-content">
                        <Handshake size={48} />
                        <h2>Invitación a la Cooperación Institucional</h2>
                        <p>
                            La Comunidad Educativa Juana Manso invita a organismos públicos,
                            universidades, ONGs y entidades del sector productivo a explorar
                            posibilidades de articulación para escalar el modelo de formación
                            técnica y académica en contexto de encierro.
                        </p>
                        <p className="alianzas__cta-sub">
                            El modelo es replicable y documentado. Contamos con experiencia
                            institucional, infraestructura operativa y resultados verificables.
                        </p>
                        <div className="alianzas__cta-actions">
                            <Link to="/contacto" className="btn btn--secondary alianzas__cta-btn">
                                Contacto Institucional
                                <ArrowRight size={16} />
                            </Link>
                            <Link to="/proyectos" className="btn btn--ghost alianzas__cta-btn-alt">
                                Ver Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proceso de Articulación */}
            <section className="section">
                <div className="container container--narrow">
                    <SectionTitle
                        badge="Procedimiento"
                        title="Proceso de Articulación"
                        subtitle="Pasos para formalizar un convenio o acuerdo de cooperación."
                        align="center"
                    />

                    <div className="alianzas__proceso">
                        <div className="alianzas__paso">
                            <span className="alianzas__paso-num">01</span>
                            <div>
                                <h4>Contacto Inicial</h4>
                                <p>Presentación institucional y manifestación de interés mediante nota formal.</p>
                            </div>
                        </div>
                        <div className="alianzas__paso">
                            <span className="alianzas__paso-num">02</span>
                            <div>
                                <h4>Evaluación Técnica</h4>
                                <p>Análisis de viabilidad y compatibilidad con capacidades institucionales.</p>
                            </div>
                        </div>
                        <div className="alianzas__paso">
                            <span className="alianzas__paso-num">03</span>
                            <div>
                                <h4>Propuesta de Convenio</h4>
                                <p>Elaboración de instrumento legal con alcances, responsabilidades y plazos.</p>
                            </div>
                        </div>
                        <div className="alianzas__paso">
                            <span className="alianzas__paso-num">04</span>
                            <div>
                                <h4>Formalización</h4>
                                <p>Firma del convenio y designación de responsables de ejecución.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Alianzas;
