import { useState } from 'react';
import { ChevronDown, Home, Users, Wrench, GraduationCap, FolderOpen, BarChart3, Handshake, Calendar, Mail } from 'lucide-react';
import './GuiaDelSitio.css';

const secciones = [
    {
        id: 'inicio',
        titulo: 'Página de Inicio',
        icono: Home,
        contenido: `La página de Inicio es la puerta de entrada institucional al sitio. Su función no es contar la historia completa de la Comunidad Educativa Juana Manso ni explicar en profundidad su identidad, sino presentar de manera rápida y clara qué tipo de institución es y qué hace en la actualidad.

Esta página debe permitir que cualquier persona, en pocos segundos, comprenda que se trata de una estructura dedicada a la formación técnica y académica en contexto de encierro, con funcionamiento formal, protocolos documentados y resultados verificables. La Home muestra el presente operativo de la institución: qué áreas existen, qué tipo de formación se brinda y qué volumen de trabajo tiene la comunidad.

En la página de Inicio se comunican los ejes principales de trabajo, las capacidades generales, algunas métricas que reflejan la actividad (horas de formación, cantidad de programas, certificaciones, alianzas) y accesos claros hacia las secciones más importantes del sitio. No se profundiza en la historia ni en el marco legal, sino que se orienta al visitante para que explore el resto del sitio según su interés.

**Para desarrollar el contenido de esta página**, la comunidad debe definir con claridad qué quiere mostrar como su oferta institucional actual: cuáles son las áreas principales, qué volumen de actividad tiene y cuáles son los datos que mejor representan el trabajo realizado. Esto implica recopilar información básica de gestión, estadísticas internas y acuerdos vigentes, y consensuar un mensaje claro sobre qué hace hoy la institución.`
    },
    {
        id: 'quienes-somos',
        titulo: 'Quiénes Somos',
        icono: Users,
        contenido: `La página de Quiénes Somos cumple una función distinta y complementaria. Su objetivo es explicar la identidad institucional de la Comunidad Educativa Juana Manso: de dónde surge, bajo qué marco funciona, cuáles son sus principios y cuál es su lugar dentro del sistema educativo y judicial.

Aquí no se trata de mostrar capacidades ni métricas, sino de construir el relato institucional que da sentido y legitimidad al proyecto. Esta página permite comprender por qué existe la comunidad, cómo se organiza, qué valores la orientan y cómo se inserta formalmente dentro del contexto en el que trabaja.

En esta sección se desarrolla la historia institucional, el encuadre normativo y educativo, la estructura organizativa y los principios que guían el trabajo. Es el espacio para explicar el recorrido de la comunidad y su identidad como institución, no como conjunto de actividades.

**Para producir el contenido de esta página**, la comisión directiva y los referentes históricos deben reconstruir y consensuar el relato institucional: recopilar documentos, resoluciones, avales, actas y toda la información que permita mostrar el origen, la evolución y la legitimidad del proyecto. También es importante definir, de manera colectiva, los principios y valores que representan a la comunidad como institución.`
    },
    {
        id: 'unidades-tecnicas',
        titulo: 'Unidades Técnicas',
        icono: Wrench,
        contenido: `La sección de Unidades Técnicas es una de las más importantes del sitio. Su función es mostrar, de manera concreta, qué capacidades técnicas tiene la comunidad. Aquí se presentan los oficios, especialidades y áreas de trabajo práctico, con un nivel de detalle que permita entender qué se enseña, cómo se enseña y qué se aprende.

Esta página comunica que la comunidad no solo brinda contención, sino formación técnica real, con trayectos formativos, competencias adquiridas, uso de herramientas y resultados concretos. Es una forma de mostrar que existe una capacidad operativa y formativa que puede ser valorada por terceros.

**Para desarrollar este contenido**, cada taller, unidad o área técnica debe describir su trabajo: qué se enseña, cuántas horas tiene el trayecto, qué competencias se adquieren, qué equipamiento se utiliza y qué tipo de trabajos o prácticas se realizan. Esto implica que los responsables de cada área colaboren activamente aportando información clara y ordenada.`
    },
    {
        id: 'area-academica',
        titulo: 'Área Académica',
        icono: GraduationCap,
        contenido: `La página del Área Académica tiene como objetivo mostrar la dimensión educativa formal y superior de la comunidad. Aquí se comunica que, además de la formación técnica, existe formación académica, jurídica y educativa, con programas, materias, convenios y articulaciones con el sistema educativo formal.

Esta sección transmite que la comunidad no se limita a enseñar oficios, sino que también promueve la continuidad educativa, el acceso a estudios formales y el desarrollo intelectual. Refuerza la idea de que se trata de una institución educativa integral.

**Para producir el contenido de esta página**, es necesario reunir planes de estudio, programas de materias, información sobre convenios con universidades o instituciones educativas, y datos sobre docentes, tutorías o actividades académicas. También se pueden incluir descripciones de trayectos educativos formales y no formales.`
    },
    {
        id: 'proyectos',
        titulo: 'Proyectos',
        icono: FolderOpen,
        contenido: `La sección de Proyectos sirve para mostrar qué se ha hecho en la práctica. Su función es convertir el trabajo cotidiano en resultados visibles. Aquí se presentan proyectos concretos, desarrollos, experiencias y trabajos realizados, de manera que el visitante pueda ver ejemplos reales del trabajo de la comunidad.

Esta página comunica capacidad de producción, aplicación de conocimientos y resultados tangibles. Ayuda a mostrar que lo que se enseña se transforma en acciones, trabajos y productos concretos.

**Para desarrollar este contenido**, la comunidad debe identificar proyectos realizados, recopilar descripciones, informes, fotos técnicas, documentación y cualquier material que permita explicar qué se hizo, con qué objetivos y con qué resultados. No se trata de mostrar "todo", sino de seleccionar proyectos representativos.`
    },
    {
        id: 'impacto',
        titulo: 'Impacto',
        icono: BarChart3,
        contenido: `La página de Impacto tiene como función mostrar los resultados institucionales del trabajo de la comunidad. No se basa en testimonios emocionales, sino en datos, logros y efectos concretos del trabajo educativo.

Aquí se comunica qué cambia gracias a la existencia de la comunidad: certificaciones obtenidas, continuidad educativa, reconocimientos, mejoras en formación, y otros indicadores que permitan mostrar que el trabajo tiene efectos reales y medibles.

**Para producir este contenido**, es necesario recopilar certificados, registros educativos, informes de seguimiento, estadísticas internas y cualquier información que permita mostrar resultados de manera clara y objetiva.`
    },
    {
        id: 'alianzas',
        titulo: 'Alianzas',
        icono: Handshake,
        contenido: `La sección de Alianzas muestra con qué instituciones trabaja la comunidad. Su función es comunicar que existe una red de cooperación, que hay vínculos con universidades, ONGs, organismos públicos y otras entidades.

Esta página transmite legitimidad, respaldo externo y capacidad de articulación. Muestra que la comunidad no está aislada, sino integrada en un entramado institucional más amplio.

**Para desarrollar esta sección**, se deben reunir convenios, cartas de intención, acuerdos, nombres de instituciones aliadas y descripciones breves de los tipos de cooperación existentes.`
    },
    {
        id: 'actividad-institucional',
        titulo: 'Actividad Institucional',
        icono: Calendar,
        contenido: `La página de Actividad Institucional tiene como función mostrar la vida institucional en movimiento. Aquí se registran visitas, jornadas, conferencias, entregas de certificados y actividades con actores externos, como jueces, abogados, docentes, referentes de derechos humanos y representantes de organizaciones.

Esta sección comunica validación externa, apertura institucional y reconocimiento. No muestra historias personales, sino que deja constancia pública de que la comunidad recibe y articula con actores relevantes.

**Para producir este contenido**, la comunidad debe llevar un registro sistemático de actividades: fechas, tipo de actividad, quiénes participaron y algunas imágenes cuidadas que documenten el evento sin exponer identidades sensibles. Esto implica generar el hábito institucional de documentar cada actividad relevante.`
    },
    {
        id: 'contacto',
        titulo: 'Contacto',
        icono: Mail,
        contenido: `La página de Contacto cumple una función práctica e institucional. Permite que organismos, instituciones y personas interesadas puedan comunicarse formalmente con la comunidad.

Esta página comunica apertura, disponibilidad y profesionalismo. Es la puerta para nuevos convenios, propuestas y articulaciones.

**Para desarrollarla**, se deben definir claramente los datos institucionales, los canales oficiales de contacto y quiénes son los referentes autorizados para responder comunicaciones.`
    }
];

function Accordion({ seccion, isOpen, onToggle }) {
    const Icon = seccion.icono;

    return (
        <div className={`guia__accordion ${isOpen ? 'guia__accordion--open' : ''}`}>
            <button className="guia__accordion-header" onClick={onToggle}>
                <div className="guia__accordion-title">
                    <Icon size={20} className="guia__accordion-icon" />
                    <span>{seccion.titulo}</span>
                </div>
                <ChevronDown size={20} className="guia__accordion-chevron" />
            </button>
            <div className="guia__accordion-body">
                <div className="guia__accordion-content">
                    {seccion.contenido.split('\n\n').map((parrafo, idx) => (
                        <p key={idx} dangerouslySetInnerHTML={{
                            __html: parrafo.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        }} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function GuiaDelSitio() {
    const [openSections, setOpenSections] = useState([]);

    const toggleSection = (id) => {
        setOpenSections(prev =>
            prev.includes(id)
                ? prev.filter(s => s !== id)
                : [...prev, id]
        );
    };

    const expandAll = () => {
        setOpenSections(secciones.map(s => s.id));
    };

    const collapseAll = () => {
        setOpenSections([]);
    };

    return (
        <main className="guia">
            {/* Hero */}
            <section className="guia__hero">
                <div className="container">
                    <span className="guia__badge">Documento Interno</span>
                    <h1 className="guia__title">Guía del Sitio</h1>
                    <p className="guia__subtitle">
                        Estructura, objetivos y funcionamiento de cada sección del sitio web institucional
                    </p>
                </div>
            </section>

            {/* Introducción */}
            <section className="guia__intro section">
                <div className="container container--narrow">
                    <div className="guia__intro-content">
                        <h2>Sobre este sitio</h2>
                        <p>
                            El nuevo sitio web de la Comunidad Educativa Juana Manso fue pensado como <strong>una herramienta institucional</strong>, no como una simple página informativa. Su función principal es mostrar de manera clara, ordenada y profesional todo el trabajo que la comunidad viene realizando desde hace años, para que pueda ser comprendido y valorado por organismos públicos, universidades, ONGs, autoridades judiciales y posibles aliados institucionales.
                        </p>
                        <p>
                            El sitio busca <strong>traducir el trabajo cotidiano de la comunidad a un lenguaje institucional</strong>, visible y verificable, de modo que lo que hoy existe en la práctica también exista como presencia pública formal. Cada página cumple un rol específico dentro de ese objetivo general.
                        </p>
                    </div>
                </div>
            </section>

            {/* Accordions */}
            <section className="guia__secciones section bg-gray">
                <div className="container container--narrow">
                    <div className="guia__secciones-header">
                        <h2>Páginas del Sitio</h2>
                        <div className="guia__actions">
                            <button className="btn btn--ghost" onClick={expandAll}>
                                Expandir todo
                            </button>
                            <button className="btn btn--ghost" onClick={collapseAll}>
                                Colapsar todo
                            </button>
                        </div>
                    </div>

                    <div className="guia__accordions">
                        {secciones.map(seccion => (
                            <Accordion
                                key={seccion.id}
                                seccion={seccion}
                                isOpen={openSections.includes(seccion.id)}
                                onToggle={() => toggleSection(seccion.id)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default GuiaDelSitio;
