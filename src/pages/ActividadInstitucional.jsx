import {
    Calendar,
    Building2,
    Users,
    Award,
    Handshake,
    FileText,
    GraduationCap,
    Scale
} from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import './ActividadInstitucional.css';

// Tipos de actividad con iconos
const tiposActividad = {
    'jornada-academica': { label: 'Jornada Académica', icon: GraduationCap },
    'conferencia': { label: 'Conferencia', icon: Users },
    'visita-institucional': { label: 'Visita Institucional', icon: Building2 },
    'certificaciones': { label: 'Entrega de Certificaciones', icon: Award },
    'cooperacion': { label: 'Cooperación Interinstitucional', icon: Handshake },
    'jornada-juridica': { label: 'Jornada Jurídica', icon: Scale },
};

// Registros de actividades institucionales
const actividades = [
    {
        id: 'act-2024-001',
        titulo: 'Jornada de formación jurídica con magistrados del fuero penal',
        tipo: 'jornada-juridica',
        fecha: '15 de noviembre de 2024',
        marcoInstitucional: 'Programa de Educación Jurídica en Contexto de Encierro',
        descripcion: 'Desarrollo de jornada formativa sobre derechos y garantías constitucionales. Participación de magistrados del fuero penal y referentes del área académica institucional. Actividad enmarcada en el programa de formación ciudadana.',
        participantes: [
            { nombre: 'Dr. [Nombre]', cargo: 'Juez de Ejecución Penal', organismo: 'Poder Judicial de la Nación' },
            { nombre: 'Lic. [Nombre]', cargo: 'Coordinadora Académica', organismo: 'Comunidad Educativa Juana Manso' },
        ],
        imagenes: [] // Sin imágenes por ahora
    },
    {
        id: 'act-2024-002',
        titulo: 'Visita institucional de autoridades del Ministerio de Educación',
        tipo: 'visita-institucional',
        fecha: '28 de octubre de 2024',
        marcoInstitucional: 'Supervisión de Programas Educativos en Contexto de Encierro',
        descripcion: 'Recorrido por instalaciones educativas y talleres técnicos. Presentación de resultados del período académico y verificación de condiciones operativas de las unidades de formación.',
        participantes: [
            { nombre: '[Funcionario]', cargo: 'Director de Educación en Contextos de Encierro', organismo: 'Ministerio de Educación' },
            { nombre: '[Funcionario]', cargo: 'Supervisora Técnica', organismo: 'Ministerio de Educación' },
        ],
        imagenes: []
    },
    {
        id: 'act-2024-003',
        titulo: 'Entrega de certificaciones de competencias laborales',
        tipo: 'certificaciones',
        fecha: '10 de octubre de 2024',
        marcoInstitucional: 'Programa de Certificación de Competencias - Ministerio de Trabajo',
        descripcion: 'Acto formal de entrega de certificaciones de competencias laborales en oficios técnicos. Participación de autoridades del Ministerio de Trabajo y representantes del sector productivo.',
        participantes: [
            { nombre: '[Funcionario]', cargo: 'Representante', organismo: 'Ministerio de Trabajo' },
            { nombre: '[Representante]', cargo: 'Delegado Regional', organismo: 'Cámara de la Construcción' },
        ],
        imagenes: []
    },
    {
        id: 'act-2024-004',
        titulo: 'Conferencia sobre reinserción laboral y formación técnica',
        tipo: 'conferencia',
        fecha: '22 de septiembre de 2024',
        marcoInstitucional: 'Ciclo de Conferencias Institucionales',
        descripcion: 'Exposición de especialistas sobre políticas de reinserción laboral y el rol de la formación técnica. Actividad abierta a referentes de organismos públicos y privados vinculados al área.',
        participantes: [
            { nombre: 'Dr. [Nombre]', cargo: 'Especialista en Políticas de Empleo', organismo: 'Universidad Nacional' },
            { nombre: 'Lic. [Nombre]', cargo: 'Coordinador de Programas', organismo: 'ONG [Nombre]' },
        ],
        imagenes: []
    },
    {
        id: 'act-2024-005',
        titulo: 'Firma de convenio de cooperación con Universidad Tecnológica Nacional',
        tipo: 'cooperacion',
        fecha: '5 de agosto de 2024',
        marcoInstitucional: 'Programa de Articulación con Educación Superior',
        descripcion: 'Formalización de convenio marco para extensión de programas de formación técnica superior. Acuerdo que habilita trayectos formativos con certificación universitaria.',
        participantes: [
            { nombre: '[Autoridad]', cargo: 'Decano', organismo: 'UTN - Facultad Regional' },
            { nombre: '[Autoridad]', cargo: 'Director Institucional', organismo: 'Comunidad Educativa Juana Manso' },
        ],
        imagenes: []
    },
];

function ActividadInstitucional() {
    return (
        <main className="actividad-institucional">
            <Hero
                badge="Registro Institucional"
                title="Actividad Institucional"
                subtitle="Visitas, jornadas y articulaciones académicas e institucionales"
                description="Documentación de actividades institucionales relevantes: visitas de autoridades, jornadas académicas, conferencias y eventos de cooperación interinstitucional."
                variant="compact"
            />

            {/* Introducción */}
            <section className="section actividad__intro">
                <div className="container container--narrow">
                    <div className="actividad__intro-content">
                        <FileText size={24} />
                        <p>
                            Esta sección registra las actividades institucionales de la Comunidad Educativa
                            Juana Manso en articulación con organismos públicos, entidades académicas y
                            referentes del sector. Los registros documentan la interacción institucional
                            como forma de validación externa y legitimidad operativa.
                        </p>
                    </div>
                </div>
            </section>

            {/* Listado de Actividades */}
            <section className="section bg-gray">
                <div className="container">
                    <SectionTitle
                        badge="Cronología"
                        title="Registro de Actividades"
                        subtitle="Listado cronológico de actividades institucionales documentadas."
                    />

                    <div className="actividad__lista">
                        {actividades.map((actividad) => {
                            const tipoData = tiposActividad[actividad.tipo];
                            const TipoIcon = tipoData?.icon || FileText;

                            return (
                                <article key={actividad.id} className="actividad__registro">
                                    <div className="actividad__registro-header">
                                        <div className="actividad__registro-tipo">
                                            <TipoIcon size={18} />
                                            <span>{tipoData?.label || 'Actividad'}</span>
                                        </div>
                                        <div className="actividad__registro-fecha">
                                            <Calendar size={14} />
                                            <span>{actividad.fecha}</span>
                                        </div>
                                    </div>

                                    <h3 className="actividad__registro-titulo">{actividad.titulo}</h3>

                                    <p className="actividad__registro-desc">{actividad.descripcion}</p>

                                    <div className="actividad__registro-participantes">
                                        <h4>Participantes institucionales</h4>
                                        <ul>
                                            {actividad.participantes.map((p, i) => (
                                                <li key={i}>
                                                    <span className="actividad__participante-nombre">{p.nombre}</span>
                                                    <span className="actividad__participante-cargo">{p.cargo}</span>
                                                    <span className="actividad__participante-org">{p.organismo}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="actividad__registro-marco">
                                        <span className="actividad__registro-marco-label">Marco institucional:</span>
                                        <span className="actividad__registro-marco-value">{actividad.marcoInstitucional}</span>
                                    </div>

                                    {actividad.imagenes && actividad.imagenes.length > 0 && (
                                        <div className="actividad__registro-galeria">
                                            {actividad.imagenes.map((img, i) => (
                                                <img key={i} src={img} alt={`Registro visual ${i + 1}`} />
                                            ))}
                                        </div>
                                    )}
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Nota institucional */}
            <section className="section">
                <div className="container container--narrow">
                    <div className="actividad__nota">
                        <h4>Nota Institucional</h4>
                        <p>
                            Los registros presentados corresponden a actividades institucionales verificables.
                            Las imágenes utilizadas respetan criterios de privacidad y seguridad institucional,
                            enfocándose en documentos, instalaciones y grupos generales.
                            Para información adicional sobre actividades específicas, contactar al área de
                            Coordinación Institucional.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ActividadInstitucional;
