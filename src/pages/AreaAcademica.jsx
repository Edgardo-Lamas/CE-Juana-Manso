import {
    GraduationCap,
    BookOpen,
    Award,
    Users,
    CheckCircle2,
    FileText,
    Scale,
    Landmark,
    HeartHandshake,
    Vote,
    Baby,
    Briefcase,
    MapPin,
    Brain
} from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import './AreaAcademica.css';

// Programas educativos
const programas = [
    {
        nivel: 'Formación Profesional',
        descripcion: 'Capacitación técnica en oficios con certificación de competencias.',
        modalidad: 'Teórico-práctica',
        duracion: '6 a 12 meses según especialidad',
        certificacion: 'Certificado de formación profesional'
    },
    {
        nivel: 'Educación Superior',
        descripcion: 'Acceso a carreras universitarias mediante convenios institucionales.',
        modalidad: 'Semipresencial / Virtual',
        duracion: 'Según plan de estudios',
        certificacion: 'Título universitario'
    },
];

// Convenios universitarios
const convenios = [
    {
        institucion: 'Universidad de Buenos Aires',
        programa: 'Programa UBA XXII',
        carreras: ['Abogacía', 'Sociología', 'Letras', 'Filosofía']
    },
    {
        institucion: 'Universidad Nacional de La Plata',
        programa: 'Extensión Universitaria',
        carreras: ['Trabajo Social', 'Comunicación Social']
    },
    {
        institucion: 'Universidad Tecnológica Nacional',
        programa: 'Tecnicaturas',
        carreras: ['Tecnicatura en Programación', 'Sistemas']
    },
];

// Cursos de formación (extraídos del sitio original)
const cursosFormacion = [
    {
        id: 'proceso-penal',
        icon: Scale,
        nombre: 'Introducción al Proceso Penal',
        descripcion: 'Curso sobre Derecho Procesal Penal de la Provincia de Buenos Aires. Proporciona conocimiento básico para identificar y aplicar las normas del código que da forma a los procesos penales, comprendiendo la gravedad de los hechos y entendiendo la pena como una sanción para la reeducación y reinserción social.',
        duracion: 'Abril a Agosto',
        horario: 'Viernes de 12:00 a 13:00 hs',
        capacitadores: 'Mariano Filippi Medina y Rodrigo Emidio Chaparro'
    },
    {
        id: 'alfabetizacion-juridica',
        icon: BookOpen,
        nombre: 'Alfabetización y Lectocomprensión Jurídica',
        descripcion: 'Herramientas educativas y jurídicas para personas en contextos de encierro. Incluye conocer derechos y garantías, aprender a reclamar efectivamente, identificar instituciones de patrocinio jurídico y reflexionar sobre el rol transformador de la educación.',
        duracion: 'Abril a Agosto',
        horario: 'Martes de 12:00 a 13:00 hs',
        capacitadores: 'Neson Rafael Cardozo'
    },
    {
        id: 'genero-ley-micaela',
        icon: HeartHandshake,
        nombre: 'Género, Abordaje de Violencias y Ley Micaela',
        descripcion: 'Programa de Reinserción Social que aborda tipos de violencias, contexto social de la Ley Micaela, patriarcado, micromachismos, estereotipos de género, diversidad sexual, relación entre violencia y género, y el rol de las instituciones.',
        duracion: 'Abril a Julio',
        horario: 'Martes de 12:00 a 13:00 hs',
        capacitadores: 'Matías Federico Silva Rodríguez'
    },
    {
        id: 'participacion-ciudadana',
        icon: Vote,
        nombre: 'Participación Ciudadana en Democracia',
        descripcion: 'Taller que brinda conocimientos sobre el funcionamiento del sistema electoral argentino, conformación de partidos políticos, y el proceso legislativo desde el inicio de un proyecto hasta la sanción de una ley.',
        duracion: 'Enero y Febrero (Curso de verano)',
        horario: 'A definir',
        capacitadores: 'Matías Silva Rodríguez'
    },
    {
        id: 'ciencias-sociales-juridicas',
        icon: Landmark,
        nombre: 'Introducción al Estudio de las Ciencias Sociales y Jurídicas',
        descripcion: 'Curso introductorio a la carrera de abogacía que prepara a los estudiantes para la primera materia de la carrera dictada por la Facultad de Ciencias Jurídicas y Sociales de la UNLP.',
        duracion: 'Enero y Febrero (Curso de verano)',
        horario: 'A definir',
        capacitadores: 'Dr. Carlos Ibarrola, Mariano Filippi Medina y Rodrigo Chaparro'
    },
    {
        id: 'derechos-ninos',
        icon: Baby,
        nombre: 'Derechos de los Niños',
        descripcion: 'Capacitación sobre los Derechos de los Niños con proyección de videos educativos, enseñanza de conceptos fundamentales y espacios de debate. Incluye reflexión sobre la paternidad en contexto de encierro.',
        duracion: 'Julio',
        horario: 'A definir',
        capacitadores: 'Equipo de Psicología y Trabajo Social'
    },
    {
        id: 'administracion-pyme',
        icon: Briefcase,
        nombre: 'Administración de PyME',
        descripcion: 'Formación sobre cómo conformar una Pequeña y Mediana Empresa, aspectos legales, herramientas para emprendimientos, modelo de negocio CANVAS, comunicación y marketing, costos, análisis FODA, contabilidad básica y balance.',
        duracion: 'Abril a Julio',
        horario: 'Lunes de 12:00 a 13:00 hs',
        capacitadores: 'Gabriel Adrián Landivar'
    },
    {
        id: 'guia-turismo',
        icon: MapPin,
        nombre: 'Coordinador y Guía de Turismo',
        descripcion: 'Primera etapa de capacitación en coordinación de contingentes turísticos y ejecución de recorridos. Incluye técnicas de comunicación para ofrecer servicios como guía turístico en escenarios tradicionales y virtuales.',
        duracion: 'Abril a Agosto',
        horario: 'Lunes de 12:00 a 13:00 hs',
        capacitadores: 'Matías Federico Silva Rodríguez y empresas del rubro'
    },
    {
        id: 'responsabilidad-subjetiva',
        icon: Brain,
        nombre: 'De la Condena a la Responsabilidad Subjetiva',
        descripcion: 'Propuesta educativa no formal dirigida a personas privadas de libertad con el objetivo de generar un espacio de reflexión profunda sobre la responsabilidad de los individuos en relación a sus acciones.',
        duracion: 'Según programación',
        horario: 'A definir',
        capacitadores: 'Programa de Educación Jurídica en Contexto de Encierro'
    },
];

// Talleres de capacitación
const talleres = [
    { nombre: 'Alfabetización Digital', horas: 40, certificacion: 'Sí' },
    { nombre: 'Operador de PC', horas: 80, certificacion: 'Sí' },
    { nombre: 'Electricidad Domiciliaria', horas: 120, certificacion: 'Sí' },
    { nombre: 'Carpintería Básica', horas: 120, certificacion: 'Sí' },
    { nombre: 'Soldadura Básica', horas: 80, certificacion: 'Sí' },
    { nombre: 'Pintura de Obra', horas: 60, certificacion: 'Sí' },
    { nombre: 'Instalaciones Sanitarias', horas: 80, certificacion: 'Sí' },
    { nombre: 'Seguridad e Higiene', horas: 40, certificacion: 'Sí' },
];

function AreaAcademica() {
    return (
        <main className="academica">
            <Hero
                badge="Formación Superior"
                title="Área Académica y Jurídica"
                subtitle="Programas educativos formales y capacitación técnica"
                description="Oferta educativa con validez oficial, articulación universitaria y formación profesional certificada. Trayectorias educativas adaptadas al contexto institucional."
                variant="compact"
            />

            {/* Estructura Académica */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        badge="Organización"
                        title="Estructura del Área Académica"
                        subtitle="Niveles educativos y modalidades de formación disponibles en la institución."
                    />

                    <div className="academica__estructura">
                        <div className="academica__estructura-item">
                            <div className="academica__estructura-icon">
                                <BookOpen size={24} />
                            </div>
                            <div>
                                <h4>Educación Formal</h4>
                                <p>Niveles primario y secundario con titulación oficial emitida por autoridad educativa competente.</p>
                            </div>
                        </div>
                        <div className="academica__estructura-item">
                            <div className="academica__estructura-icon">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <h4>Educación Superior</h4>
                                <p>Acceso a carreras universitarias mediante programas de extensión y convenios institucionales.</p>
                            </div>
                        </div>
                        <div className="academica__estructura-item">
                            <div className="academica__estructura-icon">
                                <Award size={24} />
                            </div>
                            <div>
                                <h4>Formación Profesional</h4>
                                <p>Capacitación en oficios con certificación de competencias laborales de validez nacional.</p>
                            </div>
                        </div>
                        <div className="academica__estructura-item">
                            <div className="academica__estructura-icon">
                                <Users size={24} />
                            </div>
                            <div>
                                <h4>Talleres Complementarios</h4>
                                <p>Cursos de capacitación específica en habilidades técnicas y transversales.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programas Educativos */}
            <section className="section bg-gray">
                <div className="container">
                    <SectionTitle
                        badge="Oferta Académica"
                        title="Programas Educativos"
                        subtitle="Detalle de niveles, modalidades y certificaciones de la oferta educativa institucional."
                    />

                    <div className="academica__programas">
                        {programas.map((programa, index) => (
                            <div key={index} className="academica__programa">
                                <h3 className="academica__programa-nivel">{programa.nivel}</h3>
                                <p className="academica__programa-desc">{programa.descripcion}</p>
                                <div className="academica__programa-detalles">
                                    <div>
                                        <span className="academica__programa-label">Modalidad</span>
                                        <span className="academica__programa-value">{programa.modalidad}</span>
                                    </div>
                                    <div>
                                        <span className="academica__programa-label">Duración</span>
                                        <span className="academica__programa-value">{programa.duracion}</span>
                                    </div>
                                    <div>
                                        <span className="academica__programa-label">Certificación</span>
                                        <span className="academica__programa-value">{programa.certificacion}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Convenios Universitarios */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        badge="Articulación"
                        title="Convenios Universitarios"
                        subtitle="Acuerdos marco con instituciones de educación superior que permiten el acceso a carreras de grado."
                    />

                    <div className="academica__convenios">
                        {convenios.map((convenio, index) => (
                            <div key={index} className="academica__convenio">
                                <div className="academica__convenio-header">
                                    <GraduationCap size={24} />
                                    <div>
                                        <h3>{convenio.institucion}</h3>
                                        <span>{convenio.programa}</span>
                                    </div>
                                </div>
                                <div className="academica__convenio-carreras">
                                    <h4>Carreras disponibles:</h4>
                                    <ul>
                                        {convenio.carreras.map((carrera, i) => (
                                            <li key={i}>
                                                <CheckCircle2 size={14} />
                                                <span>{carrera}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cursos de Formación */}
            <section className="section bg-gray">
                <div className="container">
                    <SectionTitle
                        badge="Formación Continua"
                        title="Cursos de Formación"
                        subtitle="Programa de capacitaciones en áreas jurídicas, sociales y de desarrollo personal."
                    />

                    <div className="academica__cursos">
                        {cursosFormacion.map((curso) => {
                            const CursoIcon = curso.icon;
                            return (
                                <article key={curso.id} className="academica__curso" id={curso.id}>
                                    <div className="academica__curso-header">
                                        <div className="academica__curso-icon">
                                            <CursoIcon size={24} />
                                        </div>
                                        <h3 className="academica__curso-nombre">{curso.nombre}</h3>
                                    </div>
                                    <p className="academica__curso-desc">{curso.descripcion}</p>
                                    <div className="academica__curso-info">
                                        <div className="academica__curso-detalle">
                                            <span className="academica__curso-label">Duración</span>
                                            <span className="academica__curso-value">{curso.duracion}</span>
                                        </div>
                                        <div className="academica__curso-detalle">
                                            <span className="academica__curso-label">Horario</span>
                                            <span className="academica__curso-value">{curso.horario}</span>
                                        </div>
                                        <div className="academica__curso-detalle">
                                            <span className="academica__curso-label">Capacitadores</span>
                                            <span className="academica__curso-value">{curso.capacitadores}</span>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Talleres */}
            <section className="section bg-gray">
                <div className="container">
                    <SectionTitle
                        badge="Capacitación"
                        title="Talleres de Formación Profesional"
                        subtitle="Cursos de capacitación técnica con certificación de competencias laborales."
                        align="center"
                    />

                    <div className="academica__talleres">
                        <table className="academica__talleres-table">
                            <thead>
                                <tr>
                                    <th>Taller</th>
                                    <th>Carga Horaria</th>
                                    <th>Certificación</th>
                                </tr>
                            </thead>
                            <tbody>
                                {talleres.map((taller, index) => (
                                    <tr key={index}>
                                        <td>{taller.nombre}</td>
                                        <td>{taller.horas} hs</td>
                                        <td>
                                            <span className="academica__talleres-cert">
                                                <CheckCircle2 size={14} />
                                                {taller.certificacion}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Documentación */}
            <section className="section">
                <div className="container container--narrow">
                    <div className="academica__doc">
                        <FileText size={32} />
                        <h3>Documentación Académica</h3>
                        <p>
                            Los certificados y títulos emitidos cuentan con validez nacional conforme
                            a la normativa educativa vigente. La documentación académica es gestionada
                            por la autoridad educativa competente del distrito.
                        </p>
                        <p>
                            Para verificación de certificaciones o consultas administrativas,
                            contactar al área académica institucional.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AreaAcademica;
