import { FileText, Calendar, Tag, Download } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { ProjectCard } from '../components/Card';
import './Proyectos.css';

// Categorías de proyectos
const categorias = [
    { id: 'todos', nombre: 'Todos' },
    { id: 'carpinteria', nombre: 'Carpintería' },
    { id: 'construccion', nombre: 'Construcción' },
    { id: 'serigrafia', nombre: 'Serigrafía' },
    { id: 'institucional', nombre: 'Institucional' },
];

// Portfolio de proyectos
const proyectos = [
    {
        id: 1,
        categoria: 'Carpintería',
        title: 'Mobiliario Escolar - Escuela Provincial N° 45',
        description: 'Fabricación de 120 pupitres y 60 bancos para dotación de aulas. Trabajo ejecutado según especificaciones técnicas del pliego.',
        date: '2024',
        tags: ['Producción en serie', 'Mobiliario escolar']
    },
    {
        id: 2,
        categoria: 'Construcción',
        title: 'Refacción Sanitaria - Edificio Administrativo',
        description: 'Renovación integral de instalaciones sanitarias. Incluye demolición, albañilería y colocación de artefactos.',
        date: '2024',
        tags: ['Mantenimiento', 'Instalaciones']
    },
    {
        id: 3,
        categoria: 'Serigrafía',
        title: 'Señalética Institucional - Ministerio de Desarrollo',
        description: 'Producción de cartelería y señalética integral para edificio público. 156 piezas ejecutadas.',
        date: '2023',
        tags: ['Señalética', 'Institucional']
    },
    {
        id: 4,
        categoria: 'Carpintería',
        title: 'Biblioteca Modular - Centro Cultural',
        description: 'Diseño y fabricación de sistema modular de estanterías para biblioteca. 24 módulos de 2m x 0.40m.',
        date: '2023',
        tags: ['Diseño especial', 'Mobiliario']
    },
    {
        id: 5,
        categoria: 'Institucional',
        title: 'Informe Anual de Gestión 2023',
        description: 'Documentación integral de actividades, indicadores y resultados del período. Disponible para consulta.',
        date: '2024',
        tags: ['Documentación', 'Gestión']
    },
    {
        id: 6,
        categoria: 'Construcción',
        title: 'Pintura Exterior - Complejo Deportivo',
        description: 'Tratamiento de fachadas y pintura exterior. 1.200 m² de superficie intervenida.',
        date: '2023',
        tags: ['Pintura', 'Exterior']
    },
    {
        id: 7,
        categoria: 'Serigrafía',
        title: 'Indumentaria Institucional - SPF',
        description: 'Estampado de indumentaria de trabajo. Producción de 500 prendas con logotipo institucional.',
        date: '2023',
        tags: ['Textil', 'Producción en serie']
    },
    {
        id: 8,
        categoria: 'Institucional',
        title: 'Manual de Procedimientos Técnicos',
        description: 'Documentación de protocolos operativos para unidades de ejecución técnica.',
        date: '2022',
        tags: ['Documentación', 'Procedimientos']
    },
];

// Documentos disponibles
const documentos = [
    {
        titulo: 'Informe de Gestión Anual 2023',
        tipo: 'PDF',
        tamaño: '2.4 MB',
        descripcion: 'Resumen ejecutivo de actividades, indicadores y resultados del período.'
    },
    {
        titulo: 'Catálogo de Capacidades Técnicas',
        tipo: 'PDF',
        tamaño: '1.8 MB',
        descripcion: 'Detalle de unidades productivas, equipamiento y certificaciones.'
    },
    {
        titulo: 'Reglamento Operativo',
        tipo: 'PDF',
        tamaño: '890 KB',
        descripcion: 'Normativa interna de funcionamiento de talleres y área académica.'
    },
    {
        titulo: 'Presentación Institucional',
        tipo: 'PDF',
        tamaño: '3.2 MB',
        descripcion: 'Documento de presentación para organismos y entidades.'
    },
];

function Proyectos() {
    return (
        <main className="proyectos">
            <Hero
                badge="Portfolio"
                title="Proyectos y Documentación"
                subtitle="Registro de trabajos ejecutados"
                description="Catálogo de proyectos realizados, documentación técnica e informes institucionales. Trazabilidad de ejecución y resultados verificables."
                variant="compact"
            />

            {/* Filtros */}
            <section className="section bg-gray proyectos__filtros-section">
                <div className="container">
                    <div className="proyectos__filtros">
                        {categorias.map((cat) => (
                            <button
                                key={cat.id}
                                className={`proyectos__filtro ${cat.id === 'todos' ? 'proyectos__filtro--active' : ''}`}
                            >
                                {cat.nombre}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        badge="Ejecución"
                        title="Portfolio de Proyectos"
                        subtitle="Trabajos ejecutados por las unidades técnicas con documentación de respaldo."
                    />

                    <div className="grid grid--3">
                        {proyectos.map((proyecto) => (
                            <ProjectCard key={proyecto.id} {...proyecto} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Documentación */}
            <section className="section bg-gray">
                <div className="container">
                    <SectionTitle
                        badge="Recursos"
                        title="Documentación Institucional"
                        subtitle="Informes, manuales y documentos disponibles para descarga o consulta."
                        align="center"
                    />

                    <div className="proyectos__documentos">
                        {documentos.map((doc, index) => (
                            <div key={index} className="proyectos__documento">
                                <div className="proyectos__documento-icon">
                                    <FileText size={24} />
                                </div>
                                <div className="proyectos__documento-info">
                                    <h4>{doc.titulo}</h4>
                                    <p>{doc.descripcion}</p>
                                    <div className="proyectos__documento-meta">
                                        <span>{doc.tipo}</span>
                                        <span>•</span>
                                        <span>{doc.tamaño}</span>
                                    </div>
                                </div>
                                <button className="proyectos__documento-btn" aria-label="Descargar documento">
                                    <Download size={18} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="proyectos__nota">
                        <p>
                            <strong>Nota:</strong> Los documentos están disponibles para organismos e instituciones
                            previa solicitud formal. Para acceso, contactar al área administrativa.
                        </p>
                    </div>
                </div>
            </section>

            {/* Estadísticas del Portfolio */}
            <section className="section">
                <div className="container">
                    <div className="proyectos__stats">
                        <div className="proyectos__stat">
                            <span className="proyectos__stat-valor">+50</span>
                            <span className="proyectos__stat-label">Proyectos documentados</span>
                        </div>
                        <div className="proyectos__stat">
                            <span className="proyectos__stat-valor">15</span>
                            <span className="proyectos__stat-label">Organismos atendidos</span>
                        </div>
                        <div className="proyectos__stat">
                            <span className="proyectos__stat-valor">+200</span>
                            <span className="proyectos__stat-label">Trabajos registrados</span>
                        </div>
                        <div className="proyectos__stat">
                            <span className="proyectos__stat-valor">100%</span>
                            <span className="proyectos__stat-label">Trazabilidad</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Proyectos;
