import { Link, useParams } from 'react-router-dom';
import {
    Wrench,
    Target,
    BookOpen,
    CheckCircle2,
    MapPin,
    Shield,
    Settings,
    BarChart3,
    Award,
    Handshake,
    ArrowLeft,
    FileText,
    AlertTriangle,
    Thermometer,
    Flame
} from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import './FichaTecnica.css';

// ============================================================
// DATOS DE LA FICHA TÉCNICA MODELO
// Unidad de Mantenimiento Termomecánico y Sistemas de Calefacción
// ============================================================

const fichaTecnica = {
    // 1. Nombre de la Unidad
    nombre: 'Unidad de Mantenimiento Termomecánico y Sistemas de Calefacción',
    codigo: 'UET-TERMO-001',
    estado: 'Operativa',

    // 2. Tipo de Capacidad
    tipoCapacidad: {
        categoria: 'Capacidad Técnica',
        subcategoria: 'Formación Profesional Aplicada',
        nivel: 'Técnico Operativo',
        clasificacion: 'Tipo A - Alta Especialización'
    },

    // 3. Objetivo Operativo
    objetivoOperativo: {
        descripcion: 'Formación técnica y ejecución operativa en mantenimiento preventivo y correctivo de sistemas de calefacción, instalaciones termomecánicas y equipos de climatización en edificaciones institucionales.',
        problemasResuelve: [
            'Diagnóstico y reparación de sistemas de calefacción central',
            'Mantenimiento preventivo de calderas y equipos de combustión',
            'Instalación y puesta en marcha de sistemas de climatización',
            'Verificación y ajuste de sistemas de seguridad térmica',
            'Optimización de consumo energético en instalaciones existentes'
        ]
    },

    // 4. Trayecto Formativo
    trayectoFormativo: {
        duracion: '640 horas',
        modalidad: 'Teórico-práctica con supervisión técnica',
        modulos: [
            {
                nombre: 'Fundamentos de Termomecánica',
                horas: 80,
                contenidos: [
                    'Principios de transferencia de calor',
                    'Termodinámica aplicada a sistemas HVAC',
                    'Propiedades de fluidos caloportadores',
                    'Normativa técnica vigente'
                ]
            },
            {
                nombre: 'Sistemas de Calefacción',
                horas: 160,
                contenidos: [
                    'Calderas: tipos, funcionamiento y mantenimiento',
                    'Circuitos de distribución de calor',
                    'Radiadores y emisores térmicos',
                    'Sistemas de control y regulación'
                ]
            },
            {
                nombre: 'Instalaciones de Gas',
                horas: 120,
                contenidos: [
                    'Normativa de instalaciones de gas',
                    'Detección de fugas y protocolos de seguridad',
                    'Revisión de instalaciones según reglamentación',
                    'Documentación técnica requerida'
                ]
            },
            {
                nombre: 'Mantenimiento Preventivo y Correctivo',
                horas: 160,
                contenidos: [
                    'Planificación de mantenimiento programado',
                    'Diagnóstico de fallas y averías',
                    'Técnicas de reparación y reemplazo',
                    'Registro y documentación de intervenciones'
                ]
            },
            {
                nombre: 'Seguridad e Higiene Industrial',
                horas: 80,
                contenidos: [
                    'Elementos de protección personal',
                    'Protocolos de trabajo seguro',
                    'Manejo de combustibles y materiales peligrosos',
                    'Emergencias y primeros auxilios'
                ]
            },
            {
                nombre: 'Práctica Profesional Supervisada',
                horas: 40,
                contenidos: [
                    'Intervenciones en instalaciones reales',
                    'Elaboración de informes técnicos',
                    'Evaluación de competencias operativas',
                    'Certificación final de capacidades'
                ]
            }
        ]
    },

    // 5. Competencias Adquiridas
    competencias: [
        'Diagnosticar fallas en sistemas de calefacción central y equipos asociados',
        'Ejecutar mantenimiento preventivo según cronogramas establecidos',
        'Realizar reparaciones de componentes mecánicos y eléctricos',
        'Verificar instalaciones de gas conforme a normativa vigente',
        'Operar equipos de medición y diagnóstico termomecánico',
        'Interpretar planos y esquemas de instalaciones térmicas',
        'Elaborar informes técnicos de intervención',
        'Aplicar protocolos de seguridad en todas las operaciones',
        'Gestionar repuestos y materiales de mantenimiento',
        'Supervisar y orientar trabajos de menor complejidad'
    ],

    // 6. Alcance de Intervención
    alcanceIntervencion: {
        ambitos: [
            {
                tipo: 'Mantenimiento Interno',
                descripcion: 'Instalaciones propias de la institución y dependencias asociadas.',
                actividades: ['Calderas centrales', 'Sistemas de radiadores', 'Instalaciones de gas']
            },
            {
                tipo: 'Tareas Preventivas',
                descripcion: 'Programas de mantenimiento planificado con cronograma anual.',
                actividades: ['Revisiones periódicas', 'Limpieza de equipos', 'Verificación de seguridad']
            },
            {
                tipo: 'Intervenciones bajo Convenio',
                descripcion: 'Servicios técnicos a organismos externos mediante acuerdo formal.',
                actividades: ['Escuelas', 'Dependencias públicas', 'Instituciones sin fines de lucro']
            }
        ]
    },

    // 7. Protocolos y Normativas
    protocolos: [
        { codigo: 'NAG-200', descripcion: 'Normas Argentinas para instalaciones de gas' },
        { codigo: 'IRAM 3501', descripcion: 'Calderas y recipientes a presión' },
        { codigo: 'Res. SRT 295/03', descripcion: 'Seguridad e higiene en el trabajo' },
        { codigo: 'Ley 19.587', descripcion: 'Higiene y Seguridad en el Trabajo' },
        { codigo: 'ISO 9001', descripcion: 'Gestión de calidad (en proceso de adopción)' }
    ],

    // 8. Recursos y Equipamiento
    equipamiento: {
        infraestructura: [
            'Taller de prácticas con instalación modelo',
            'Aula técnica equipada',
            'Depósito de repuestos y materiales'
        ],
        herramientas: [
            'Analizadores de combustión',
            'Manómetros y termómetros de precisión',
            'Detectores de fugas de gas',
            'Equipo de soldadura autógena',
            'Herramientas manuales específicas',
            'Multímetros y pinzas amperimétricas'
        ],
        soporte: [
            'Manuales técnicos actualizados',
            'Acceso a normativa vigente',
            'Supervisión técnica permanente',
            'Coordinación con proveedores especializados'
        ]
    },

    // 9. Resultados y Evidencia
    resultados: {
        metricas: [
            { indicador: 'Intervenciones realizadas', valor: '+120', periodo: '2020-2024' },
            { indicador: 'Equipos mantenidos', valor: '45', periodo: 'anual promedio' },
            { indicador: 'Certificaciones emitidas', valor: '32', periodo: 'acumulado' },
            { indicador: 'Incidentes de seguridad', valor: '0', periodo: 'histórico' }
        ],
        trabajosDestacados: [
            'Mantenimiento integral de sistema de calefacción central (12 calderas)',
            'Instalación de sistema de seguridad térmica en dependencias',
            'Programa de optimización energética con reducción del 18% en consumo'
        ]
    },

    // 10. Avales y Articulaciones
    avales: [
        { organismo: 'Ministerio de Educación', tipo: 'Reconocimiento de formación' },
        { organismo: 'Ministerio de Trabajo', tipo: 'Certificación de Competencias Laborales' },
        { organismo: 'ENARGAS', tipo: 'Protocolo de seguridad en instalaciones de gas' },
        { organismo: 'UTN - Universidad Tecnológica Nacional', tipo: 'Articulación académica' }
    ],

    // 11. Potencial de Alianza
    potencialAlianza: {
        descripcion: 'La unidad presenta capacidad verificada para ampliar su alcance mediante convenios con organismos públicos, empresas de servicios y entidades educativas.',
        oportunidades: [
            'Extensión de servicios a edificios públicos de la jurisdicción',
            'Capacitación de personal técnico de otras instituciones',
            'Proyectos de eficiencia energética en instalaciones estatales',
            'Programa de certificación de instaladores en la región'
        ],
        requisitos: [
            'Convenio marco institucional',
            'Provisión de materiales y repuestos',
            'Supervisión técnica externa (según complejidad)',
            'Seguro de responsabilidad civil'
        ]
    }
};

function FichaTecnica() {
    return (
        <main className="ficha-tecnica">
            {/* Header con navegación */}
            <section className="ficha-tecnica__header">
                <div className="container">
                    <Link to="/unidades-tecnicas" className="ficha-tecnica__back">
                        <ArrowLeft size={16} />
                        <span>Volver a Unidades Técnicas</span>
                    </Link>

                    <div className="ficha-tecnica__titulo">
                        <div className="ficha-tecnica__badges">
                            <span className="ficha-tecnica__badge ficha-tecnica__badge--codigo">{fichaTecnica.codigo}</span>
                            <span className="ficha-tecnica__badge ficha-tecnica__badge--estado">{fichaTecnica.estado}</span>
                        </div>
                        <h1>{fichaTecnica.nombre}</h1>
                        <div className="ficha-tecnica__meta">
                            <span><Thermometer size={16} /> {fichaTecnica.tipoCapacidad.categoria}</span>
                            <span><Settings size={16} /> {fichaTecnica.tipoCapacidad.clasificacion}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Tipo de Capacidad */}
            <section className="section ficha-tecnica__tipo">
                <div className="container">
                    <div className="ficha-tecnica__tipo-grid">
                        <div className="ficha-tecnica__tipo-item">
                            <span className="ficha-tecnica__label">Categoría</span>
                            <span className="ficha-tecnica__value">{fichaTecnica.tipoCapacidad.categoria}</span>
                        </div>
                        <div className="ficha-tecnica__tipo-item">
                            <span className="ficha-tecnica__label">Subcategoría</span>
                            <span className="ficha-tecnica__value">{fichaTecnica.tipoCapacidad.subcategoria}</span>
                        </div>
                        <div className="ficha-tecnica__tipo-item">
                            <span className="ficha-tecnica__label">Nivel</span>
                            <span className="ficha-tecnica__value">{fichaTecnica.tipoCapacidad.nivel}</span>
                        </div>
                        <div className="ficha-tecnica__tipo-item">
                            <span className="ficha-tecnica__label">Clasificación</span>
                            <span className="ficha-tecnica__value">{fichaTecnica.tipoCapacidad.clasificacion}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Objetivo Operativo */}
            <section className="section bg-gray">
                <div className="container">
                    <SectionTitle
                        badge="Sección 3"
                        title="Objetivo Operativo"
                        subtitle="Problemas reales que la unidad está capacitada para resolver."
                    />

                    <div className="ficha-tecnica__objetivo">
                        <p className="ficha-tecnica__objetivo-desc">{fichaTecnica.objetivoOperativo.descripcion}</p>

                        <div className="ficha-tecnica__objetivo-lista">
                            <h4><Target size={18} /> Capacidades de Resolución</h4>
                            <ul>
                                {fichaTecnica.objetivoOperativo.problemasResuelve.map((problema, i) => (
                                    <li key={i}>
                                        <CheckCircle2 size={16} />
                                        <span>{problema}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Trayecto Formativo */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        badge="Sección 4"
                        title="Trayecto Formativo / Programa Técnico"
                        subtitle="Recorrido estructurado orientado a la adquisición de competencias operativas."
                    />

                    <div className="ficha-tecnica__trayecto-info">
                        <div className="ficha-tecnica__trayecto-meta">
                            <span><BookOpen size={16} /> Duración total: {fichaTecnica.trayectoFormativo.duracion}</span>
                            <span><Settings size={16} /> Modalidad: {fichaTecnica.trayectoFormativo.modalidad}</span>
                        </div>
                    </div>

                    <div className="ficha-tecnica__modulos">
                        {fichaTecnica.trayectoFormativo.modulos.map((modulo, index) => (
                            <div key={index} className="ficha-tecnica__modulo">
                                <div className="ficha-tecnica__modulo-header">
                                    <span className="ficha-tecnica__modulo-num">Módulo {index + 1}</span>
                                    <h4>{modulo.nombre}</h4>
                                    <span className="ficha-tecnica__modulo-horas">{modulo.horas} hs</span>
                                </div>
                                <ul className="ficha-tecnica__modulo-contenidos">
                                    {modulo.contenidos.map((contenido, i) => (
                                        <li key={i}>{contenido}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Competencias Adquiridas */}
            <section className="section bg-gray">
                <div className="container">
                    <SectionTitle
                        badge="Sección 5"
                        title="Competencias y Capacidades Adquiridas"
                        subtitle="Habilidades técnicas verificables al completar el trayecto formativo."
                    />

                    <div className="ficha-tecnica__competencias">
                        {fichaTecnica.competencias.map((competencia, index) => (
                            <div key={index} className="ficha-tecnica__competencia">
                                <CheckCircle2 size={18} />
                                <span>{competencia}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Alcance de Intervención */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        badge="Sección 6"
                        title="Alcance de Intervención"
                        subtitle="Ámbitos donde la unidad puede actuar y tipos de servicio disponibles."
                    />

                    <div className="ficha-tecnica__alcance">
                        {fichaTecnica.alcanceIntervencion.ambitos.map((ambito, index) => (
                            <div key={index} className="ficha-tecnica__alcance-item">
                                <h4><MapPin size={18} /> {ambito.tipo}</h4>
                                <p>{ambito.descripcion}</p>
                                <div className="ficha-tecnica__alcance-tags">
                                    {ambito.actividades.map((act, i) => (
                                        <span key={i} className="ficha-tecnica__tag">{act}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Protocolos y Normativas */}
            <section className="section bg-gray">
                <div className="container">
                    <SectionTitle
                        badge="Sección 7"
                        title="Protocolos y Normativas"
                        subtitle="Marcos técnicos, legales y de seguridad aplicables a la operación."
                    />

                    <div className="ficha-tecnica__protocolos">
                        <table>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fichaTecnica.protocolos.map((protocolo, index) => (
                                    <tr key={index}>
                                        <td className="ficha-tecnica__protocolo-codigo">{protocolo.codigo}</td>
                                        <td>{protocolo.descripcion}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 8. Recursos y Equipamiento */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        badge="Sección 8"
                        title="Recursos y Equipamiento"
                        subtitle="Infraestructura, herramientas y soporte técnico disponible."
                    />

                    <div className="ficha-tecnica__recursos">
                        <div className="ficha-tecnica__recurso">
                            <h4><Settings size={18} /> Infraestructura</h4>
                            <ul>
                                {fichaTecnica.equipamiento.infraestructura.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="ficha-tecnica__recurso">
                            <h4><Wrench size={18} /> Herramientas y Equipos</h4>
                            <ul>
                                {fichaTecnica.equipamiento.herramientas.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="ficha-tecnica__recurso">
                            <h4><FileText size={18} /> Soporte Técnico</h4>
                            <ul>
                                {fichaTecnica.equipamiento.soporte.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Resultados y Evidencia */}
            <section className="section bg-gray">
                <div className="container">
                    <SectionTitle
                        badge="Sección 9"
                        title="Resultados y Evidencia"
                        subtitle="Trabajos realizados, métricas e indicadores de impacto verificables."
                    />

                    <div className="ficha-tecnica__resultados">
                        <div className="ficha-tecnica__metricas-grid">
                            {fichaTecnica.resultados.metricas.map((metrica, index) => (
                                <div key={index} className="ficha-tecnica__metrica">
                                    <span className="ficha-tecnica__metrica-valor">{metrica.valor}</span>
                                    <span className="ficha-tecnica__metrica-indicador">{metrica.indicador}</span>
                                    <span className="ficha-tecnica__metrica-periodo">{metrica.periodo}</span>
                                </div>
                            ))}
                        </div>

                        <div className="ficha-tecnica__trabajos">
                            <h4><BarChart3 size={18} /> Trabajos Destacados</h4>
                            <ul>
                                {fichaTecnica.resultados.trabajosDestacados.map((trabajo, i) => (
                                    <li key={i}>
                                        <CheckCircle2 size={16} />
                                        <span>{trabajo}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Avales y Articulaciones */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        badge="Sección 10"
                        title="Avales y Articulaciones Institucionales"
                        subtitle="Ministerios, universidades, organismos y programas asociados."
                    />

                    <div className="ficha-tecnica__avales">
                        {fichaTecnica.avales.map((aval, index) => (
                            <div key={index} className="ficha-tecnica__aval">
                                <Award size={20} />
                                <div>
                                    <span className="ficha-tecnica__aval-org">{aval.organismo}</span>
                                    <span className="ficha-tecnica__aval-tipo">{aval.tipo}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. Potencial de Alianza */}
            <section className="section ficha-tecnica__alianza bg-primary">
                <div className="container">
                    <SectionTitle
                        badge="Sección 11"
                        title="Potencial de Alianza y Escalabilidad"
                        subtitle="Oportunidades de ampliación mediante apoyo externo."
                        dark
                    />

                    <div className="ficha-tecnica__alianza-content">
                        <p className="ficha-tecnica__alianza-desc">{fichaTecnica.potencialAlianza.descripcion}</p>

                        <div className="ficha-tecnica__alianza-grid">
                            <div className="ficha-tecnica__alianza-col">
                                <h4><Handshake size={18} /> Oportunidades</h4>
                                <ul>
                                    {fichaTecnica.potencialAlianza.oportunidades.map((op, i) => (
                                        <li key={i}>{op}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="ficha-tecnica__alianza-col">
                                <h4><AlertTriangle size={18} /> Requisitos para Articulación</h4>
                                <ul>
                                    {fichaTecnica.potencialAlianza.requisitos.map((req, i) => (
                                        <li key={i}>{req}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="ficha-tecnica__alianza-cta">
                            <Link to="/contacto" className="btn btn--secondary">
                                Consultar por convenio
                            </Link>
                            <Link to="/alianzas" className="btn btn--ghost">
                                Ver proceso de articulación
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nota metodológica */}
            <section className="section ficha-tecnica__nota">
                <div className="container">
                    <div className="ficha-tecnica__nota-content">
                        <FileText size={20} />
                        <div>
                            <h4>Nota Técnica</h4>
                            <p>
                                La presente ficha técnica constituye documentación institucional verificable.
                                Los datos consignados corresponden a registros de gestión actualizados.
                                Para información adicional o solicitud de convenio, contactar al área de
                                Coordinación Técnica.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default FichaTecnica;
