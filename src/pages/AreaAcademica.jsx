import {
    GraduationCap,
    BookOpen,
    Award,
    Users,
    CheckCircle2,
    FileText
} from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import './AreaAcademica.css';

// Programas educativos
const programas = [
    {
        nivel: 'Educación Primaria',
        descripcion: 'Finalización de estudios primarios con titulación oficial.',
        modalidad: 'Presencial',
        duracion: 'Según trayectoria individual',
        certificacion: 'Título primario con validez nacional'
    },
    {
        nivel: 'Educación Secundaria',
        descripcion: 'Bachillerato con orientación en Economía y Administración.',
        modalidad: 'Presencial',
        duracion: '5 años (con posibilidad de aceleración)',
        certificacion: 'Título secundario con validez nacional'
    },
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
