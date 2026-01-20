import {
    TrendingUp,
    Users,
    Award,
    FileCheck,
    Building,
    Calendar
} from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { MetricCard } from '../components/Card';
import './Impacto.css';

// Métricas principales
const metricasPrincipales = [
    { value: '+15', label: 'Años de Operación', description: 'Ejecución técnica continua' },
    { value: '+580', label: 'Certificaciones Emitidas', description: 'Formación técnica acreditada' },
    { value: '12', label: 'Convenios Vigentes', description: 'Articulación institucional activa' },
    { value: '+50', label: 'Proyectos Ejecutados', description: 'Portfolio documentado' },
];

// Indicadores de formación
const indicadoresFormacion = [
    { indicador: 'Egresados nivel primario', valor: '127', periodo: '2020-2024' },
    { indicador: 'Egresados nivel secundario', valor: '89', periodo: '2020-2024' },
    { indicador: 'Certificaciones técnicas otorgadas', valor: '342', periodo: '2020-2024' },
    { indicador: 'Inscriptos en educación superior', valor: '56', periodo: '2020-2024' },
    { indicador: 'Talleres de capacitación realizados', valor: '+80', periodo: '2020-2024' },
    { indicador: 'Horas de formación impartidas', valor: '+12.000', periodo: '2020-2024' },
];

// Indicadores productivos
const indicadoresProductivos = [
    { indicador: 'Proyectos de carpintería ejecutados', valor: '156', periodo: '2020-2024' },
    { indicador: 'Obras de mantenimiento', valor: '87', periodo: '2020-2024' },
    { indicador: 'Trabajos de serigrafía', valor: '234', periodo: '2020-2024' },
    { indicador: 'Instalaciones eléctricas', valor: '45', periodo: '2020-2024' },
];

// Avales y certificaciones
const avales = [
    {
        tipo: 'Habilitación Educativa',
        otorgante: 'Ministerio de Educación',
        descripcion: 'Reconocimiento oficial de programas educativos formales.',
        vigencia: 'Permanente'
    },
    {
        tipo: 'Certificación de Competencias',
        otorgante: 'Ministerio de Trabajo',
        descripcion: 'Habilitación para emitir certificados de formación profesional.',
        vigencia: 'Renovación anual'
    },
    {
        tipo: 'Convenio Marco Universitario',
        otorgante: 'Universidades Nacionales',
        descripcion: 'Acuerdo para extensión de carreras de grado.',
        vigencia: 'Según convenio'
    },
    {
        tipo: 'Registro de Proveedores',
        otorgante: 'Administración Pública',
        descripcion: 'Habilitación para provisión de bienes y servicios al Estado.',
        vigencia: 'Vigente'
    },
];

// Timeline institucional
const hitos = [
    { año: '2008', evento: 'Creación formal de la Comunidad Educativa' },
    { año: '2010', evento: 'Primer convenio universitario (UBA XXII)' },
    { año: '2012', evento: 'Habilitación de talleres productivos' },
    { año: '2015', evento: 'Certificación de competencias laborales' },
    { año: '2018', evento: 'Ampliación de convenios universitarios' },
    { año: '2020', evento: 'Digitalización de procesos educativos' },
    { año: '2023', evento: 'Actualización de equipamiento técnico' },
];

function Impacto() {
    return (
        <main className="impacto">
            <Hero
                badge="Indicadores Institucionales"
                title="Impacto y Métricas"
                subtitle="Datos objetivos de gestión y resultados"
                description="Indicadores cuantitativos de operación, formación y articulación institucional. Documentación verificable de resultados y trazabilidad de gestión."
                variant="compact"
            />

            {/* Métricas Principales */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        badge="Resumen Ejecutivo"
                        title="Indicadores Clave"
                        subtitle="Métricas agregadas de operación institucional."
                        align="center"
                    />

                    <div className="grid grid--4">
                        {metricasPrincipales.map((metrica, index) => (
                            <MetricCard key={index} {...metrica} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Indicadores de Formación */}
            <section className="section bg-gray">
                <div className="container">
                    <div className="impacto__indicadores-grid">
                        <div>
                            <SectionTitle
                                badge="Área Académica"
                                title="Indicadores de Formación"
                            />

                            <div className="impacto__tabla">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Indicador</th>
                                            <th>Valor</th>
                                            <th>Período</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {indicadoresFormacion.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.indicador}</td>
                                                <td className="impacto__tabla-valor">{item.valor}</td>
                                                <td>{item.periodo}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <SectionTitle
                                badge="Unidades Técnicas"
                                title="Indicadores Productivos"
                            />

                            <div className="impacto__tabla">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Indicador</th>
                                            <th>Valor</th>
                                            <th>Período</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {indicadoresProductivos.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.indicador}</td>
                                                <td className="impacto__tabla-valor">{item.valor}</td>
                                                <td>{item.periodo}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Avales y Certificaciones */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        badge="Legitimidad"
                        title="Avales y Certificaciones Institucionales"
                        subtitle="Habilitaciones, reconocimientos y registros ante organismos competentes."
                    />

                    <div className="impacto__avales">
                        {avales.map((aval, index) => (
                            <div key={index} className="impacto__aval">
                                <div className="impacto__aval-header">
                                    <FileCheck size={20} />
                                    <span className="impacto__aval-tipo">{aval.tipo}</span>
                                </div>
                                <div className="impacto__aval-otorgante">
                                    <Building size={14} />
                                    <span>{aval.otorgante}</span>
                                </div>
                                <p className="impacto__aval-desc">{aval.descripcion}</p>
                                <div className="impacto__aval-vigencia">
                                    <Calendar size={14} />
                                    <span>{aval.vigencia}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section bg-gray">
                <div className="container container--narrow">
                    <SectionTitle
                        badge="Trayectoria"
                        title="Hitos Institucionales"
                        subtitle="Evolución cronológica de la institución."
                        align="center"
                    />

                    <div className="impacto__timeline">
                        {hitos.map((hito, index) => (
                            <div key={index} className="impacto__timeline-item">
                                <span className="impacto__timeline-año">{hito.año}</span>
                                <div className="impacto__timeline-linea" />
                                <p className="impacto__timeline-evento">{hito.evento}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nota metodológica */}
            <section className="section">
                <div className="container container--narrow">
                    <div className="impacto__nota">
                        <TrendingUp size={24} />
                        <h3>Nota Metodológica</h3>
                        <p>
                            Los indicadores presentados corresponden a datos consolidados de gestión
                            institucional. La información es actualizada periódicamente conforme a
                            los informes de gestión y auditorías internas.
                        </p>
                        <p>
                            Para acceso a informes detallados o documentación de respaldo,
                            contactar al área administrativa.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Impacto;
