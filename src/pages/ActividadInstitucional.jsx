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
import PhotoGallery from '../components/PhotoGallery';
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
        id: 'act-2026-001',
        titulo: 'Programa de Primeros Socorros y RCP Básico en Zonas Urbanas',
        tipo: 'certificaciones',
        fecha: 'Enero de 2026',
        marcoInstitucional: 'Capacitación extensiva en colaboración con Dirección de Salud Penitenciaria',
        descripcion: 'Primera capacitación del año en modalidad extensiva. Formación desarrollada cada viernes de enero de 2026, marcando un excelente inicio de ciclo. Agradecimiento especial a los profesores Santiago y Rodrigo de la Dirección de Salud Penitenciaria.',
        participantes: [
            { nombre: 'Profesor Santiago', cargo: 'Capacitador', organismo: 'Dirección de Salud Penitenciaria' },
            { nombre: 'Profesor Rodrigo', cargo: 'Capacitador', organismo: 'Dirección de Salud Penitenciaria' },
        ],
        imagenes: []
    },
    {
        id: 'act-2025-002',
        titulo: 'Charla de Prevención de Incendios y Plan de Evacuación',
        tipo: 'jornada-academica',
        fecha: '10 de diciembre de 2025',
        marcoInstitucional: 'Capacitación en Seguridad Institucional',
        descripcion: 'Personal de Bomberos de la Unidad N°9 del SPB brindó charla instructiva sobre prevención de incendios, plan de evacuación, salidas de emergencia, uso de extintores (clases A,B,C,D,E y K), conexiones eléctricas y recomendaciones de seguridad.',
        participantes: [
            { nombre: 'Personal de Bomberos', cargo: 'Instructores', organismo: 'Unidad N°9 SPB' },
        ],
        imagenes: []
    },
    {
        id: 'act-2025-003',
        titulo: 'Charla de Toma de Conciencia y Prevención del Suicidio',
        tipo: 'jornada-academica',
        fecha: '19 de noviembre de 2025',
        marcoInstitucional: 'Programa de Salud Mental y Bienestar',
        descripcion: 'En conmemoración del 143° aniversario de la fundación de La Plata, se brindó charla por parte del personal de Salud Penitenciaria sobre toma de conciencia y prevención del suicidio, proporcionando herramientas para atravesar la situación de encierro.',
        participantes: [
            { nombre: 'Personal de Salud Penitenciaria', cargo: 'Profesionales', organismo: 'SPB' },
        ],
        imagenes: []
    },
    {
        id: 'act-2025-004',
        titulo: 'Curso: De la Condena a la Responsabilidad Subjetiva',
        tipo: 'jornada-juridica',
        fecha: '3 de noviembre de 2025',
        marcoInstitucional: 'Programa de Educación Jurídica en Contexto de Encierro',
        descripcion: 'Inicio del curso titulado "De la condena a la responsabilidad subjetiva". Propuesta educativa no formal dirigida a personas privadas de libertad con el objetivo de generar un espacio de reflexión profunda sobre la responsabilidad de los individuos en relación a sus acciones.',
        participantes: [
            { nombre: 'Equipo Académico', cargo: 'Capacitadores', organismo: 'Comunidad Educativa Juana Manso' },
        ],
        imagenes: []
    },
    {
        id: 'act-2025-005',
        titulo: 'Donaciones que Hacen Crecer a la Comunidad Educativa',
        tipo: 'cooperacion',
        fecha: '2025',
        marcoInstitucional: 'Gestión de Recursos y Alianzas',
        descripcion: 'Recepción de donaciones que fortalecen las herramientas didácticas: pantalla con trípode para proyector donada por Pablo Roldán, e impresora láser Xerox donada por Matías Silva. Estos aportes mejoran significativamente la experiencia de aprendizaje.',
        participantes: [
            { nombre: 'Pablo Roldán', cargo: 'Donante', organismo: 'Colaborador externo' },
            { nombre: 'Matías Silva', cargo: 'Donante', organismo: 'Colaborador externo' },
        ],
        imagenes: []
    },
    {
        id: 'act-2025-006',
        titulo: 'Entrega de Certificados a Promotores de Salud',
        tipo: 'certificaciones',
        fecha: '8 de agosto de 2025',
        marcoInstitucional: 'Programa de Promotores de Salud',
        descripcion: 'Acto de entrega de certificados a participantes del segundo curso de "Promotores de Salud". Ceremonia realizada en el SUM del Pabellón 16 B.',
        participantes: [
            { nombre: 'Coordinación Académica', cargo: 'Organizadores', organismo: 'Comunidad Educativa Juana Manso' },
            { nombre: 'Personal de Salud Penitenciaria', cargo: 'Docentes', organismo: 'SPB' },
        ],
        imagenes: []
    },
    {
        id: 'act-2025-007',
        titulo: 'Primer Aniversario de la Comunidad Educativa Juana Manso',
        tipo: 'jornada-academica',
        fecha: '11 de julio de 2025',
        marcoInstitucional: 'Celebración Institucional',
        descripcion: 'Se cumple el primer aniversario de la Comunidad Educativa "Juana Manso". Lo que comenzó como una idea presentada a las autoridades de la Unidad 9 de La Plata se convirtió en un espacio de autogestión de cursos y talleres. Coincidiendo con el cierre del primer cuatrimestre, se realizó entrega de certificados.',
        participantes: [
            { nombre: 'Guillermo González', cargo: 'Coordinador', organismo: 'Comunidad Educativa Juana Manso' },
            { nombre: 'Luis Díaz Zapata', cargo: 'Coordinador', organismo: 'Comunidad Educativa Juana Manso' },
        ],
        imagenes: []
    },
    {
        id: 'act-2025-008',
        titulo: 'Reunión con Ministerio de Justicia - Proyecto Melodías para la Transformación',
        tipo: 'visita-institucional',
        fecha: '26 de junio de 2025',
        marcoInstitucional: 'Gestión de Proyectos Culturales',
        descripcion: 'Reunión con representantes del Ministerio de Justicia para presentar el Proyecto "Melodías para la Transformación". Se obtuvo apoyo institucional y compromiso para evaluar donación de instrumentos. Los representantes presenciaron ensayo de rock y cumbia.',
        participantes: [
            { nombre: 'Representantes', cargo: 'Funcionarios', organismo: 'Ministerio de Justicia' },
        ],
        imagenes: []
    },
    {
        id: 'act-2025-009',
        titulo: 'Donación de Libros al Pabellón Literario',
        tipo: 'cooperacion',
        fecha: '2025',
        marcoInstitucional: 'Fomento de la Educación y la Cultura',
        descripcion: 'Donación de libros y material de estudio del Pabellón N°16 B hacia el Pabellón "Literario" N°18, fortaleciendo las actividades educativas y culturales como marco principal para la resocialización.',
        participantes: [
            { nombre: 'Pabellón 16 B', cargo: 'Donante', organismo: 'Comunidad Educativa Juana Manso' },
            { nombre: 'Pabellón 18 "Literario"', cargo: 'Beneficiario', organismo: 'Unidad 9' },
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
                                        <PhotoGallery
                                            images={actividad.imagenes}
                                            title={actividad.titulo}
                                        />
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
