import { Link } from 'react-router-dom';
import {
    Wrench,
    Hammer,
    Paintbrush,
    Printer,
    Cable,
    Ruler,
    CheckCircle2,
    ArrowRight,
    Thermometer
} from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import './UnidadesTecnicas.css';

// Unidades de ejecución técnica
const unidades = [
    {
        id: 'termomecanica',
        icon: Thermometer,
        nombre: 'Mantenimiento Termomecánico y Sistemas de Calefacción',
        clasificacion: 'Unidad Productiva Tipo A',
        descripcion: 'Mantenimiento preventivo y correctivo de sistemas de calefacción, instalaciones termomecánicas y equipos de climatización en edificaciones institucionales.',
        capacidades: [
            'Diagnóstico y reparación de calderas',
            'Mantenimiento preventivo de sistemas térmicos',
            'Instalación de sistemas de climatización',
            'Verificación de instalaciones de gas',
            'Optimización de consumo energético'
        ],
        equipamiento: [
            'Analizadores de combustión',
            'Manómetros y termómetros de precisión',
            'Detectores de fugas de gas',
            'Equipo de soldadura autógena',
            'Herramientas específicas'
        ],
        certificaciones: [
            'Técnico en calefacción',
            'Gasista matriculado',
            'Mantenimiento de calderas'
        ],
        fichaUrl: '/unidades-tecnicas/termomecanica'
    },
    {
        id: 'carpinteria',
        icon: Wrench,
        nombre: 'Carpintería y Mobiliario',
        clasificacion: 'Unidad Productiva Tipo A',
        descripcion: 'Fabricación de mobiliario institucional, comercial y doméstico según especificaciones técnicas. Trabajo en madera maciza, aglomerados y MDF.',
        capacidades: [
            'Mobiliario escolar (bancos, pupitres, estanterías)',
            'Equipamiento institucional (escritorios, archivadores)',
            'Carpintería de obra (puertas, marcos, molduras)',
            'Muebles especiales según planos',
            'Restauración de mobiliario'
        ],
        equipamiento: [
            'Sierra circular de banco',
            'Cepilladora industrial',
            'Torno de madera',
            'Herramientas de banco completas',
            'Sistema de aspiración'
        ],
        certificaciones: [
            'Carpintero de obra',
            'Operador de maquinaria de carpintería',
            'Lustre y acabado de maderas'
        ],
        fichaUrl: null // Próximamente
    },
    {
        id: 'construccion',
        icon: Hammer,
        nombre: 'Construcción y Albañilería',
        clasificacion: 'Unidad Productiva Tipo A',
        descripcion: 'Ejecución de obras menores, mantenimiento edilicio y reformas conforme a documentación técnica y normativas de seguridad.',
        capacidades: [
            'Albañilería general',
            'Revoques y terminaciones',
            'Colocación de pisos y revestimientos',
            'Mantenimiento edilicio',
            'Instalaciones sanitarias básicas'
        ],
        equipamiento: [
            'Herramientas de albañilería completas',
            'Mezcladora de concreto',
            'Andamios normalizados',
            'Elementos de seguridad',
            'Instrumentos de medición'
        ],
        certificaciones: [
            'Albañil general',
            'Colocador de pisos',
            'Instalador sanitarista auxiliar'
        ]
    },
    {
        id: 'pintura',
        icon: Paintbrush,
        nombre: 'Pintura y Terminaciones',
        clasificacion: 'Unidad Productiva Tipo B',
        descripcion: 'Trabajos de pintura interior y exterior, empapelado y tratamientos especiales para superficies según especificaciones técnicas.',
        capacidades: [
            'Pintura interior y exterior',
            'Preparación de superficies',
            'Empapelado',
            'Tratamientos especiales',
            'Lacado y barnizado'
        ],
        equipamiento: [
            'Compresores y pistolas de aire',
            'Andamios y escaleras',
            'Herramientas de preparación',
            'Elementos de protección',
            'Catálogo de colores estándar'
        ],
        certificaciones: [
            'Pintor de obra',
            'Aplicador de revestimientos',
            'Preparador de superficies'
        ]
    },
    {
        id: 'serigrafia',
        icon: Printer,
        nombre: 'Serigrafía y Gráfica',
        clasificacion: 'Unidad Productiva Tipo B',
        descripcion: 'Producción gráfica institucional, señalética y material de difusión mediante técnicas serigráficas y de impresión.',
        capacidades: [
            'Impresión serigráfica textil',
            'Señalética institucional',
            'Cartelería y gráfica',
            'Material promocional',
            'Estampado de indumentaria'
        ],
        equipamiento: [
            'Mesa de serigrafía',
            'Pulpo de estampado',
            'Secador flash',
            'Insuladoras',
            'Sistema de revelado'
        ],
        certificaciones: [
            'Serígrafo',
            'Operador de impresión gráfica',
            'Diseño de matrices'
        ]
    },
    {
        id: 'electricidad',
        icon: Cable,
        nombre: 'Electricidad',
        clasificacion: 'Unidad Productiva Tipo C',
        descripcion: 'Instalaciones eléctricas domiciliarias e industriales de baja tensión conforme a reglamentación AEA y normativas vigentes.',
        capacidades: [
            'Instalaciones domiciliarias',
            'Tableros eléctricos',
            'Mantenimiento preventivo',
            'Reparación de circuitos',
            'Luminotecnia básica'
        ],
        equipamiento: [
            'Instrumental de medición',
            'Herramientas aisladas',
            'Elementos de seguridad eléctrica',
            'Material didáctico',
            'Tableros de práctica'
        ],
        certificaciones: [
            'Electricista domiciliario',
            'Instalador eléctrico autorizado',
            'Mantenimiento eléctrico industrial'
        ]
    },
    {
        id: 'herreria',
        icon: Ruler,
        nombre: 'Herrería y Soldadura',
        clasificacion: 'Unidad Productiva Tipo A',
        descripcion: 'Fabricación de estructuras metálicas, herrería artística y trabajos de soldadura según documentación técnica.',
        capacidades: [
            'Estructuras metálicas livianas',
            'Herrería de obra (rejas, portones)',
            'Soldadura MIG/MAG y eléctrica',
            'Mobiliario metálico',
            'Reparaciones generales'
        ],
        equipamiento: [
            'Soldadora MIG/MAG',
            'Soldadora eléctrica',
            'Amoladora angular',
            'Taladro de banco',
            'Elementos de protección'
        ],
        certificaciones: [
            'Soldador básico',
            'Herrero de obra',
            'Operador de amoladora'
        ]
    },
];

function UnidadesTecnicas() {
    return (
        <main className="unidades">
            <Hero
                badge="Capacidades Productivas"
                title="Unidades de Ejecución Técnica"
                subtitle="Catálogo de capacidades operativas"
                description="Áreas productivas con equipamiento habilitado, personal técnico certificado y capacidad de ejecución demostrable. Cada unidad opera bajo protocolos de calidad y seguridad."
                variant="compact"
            />

            {/* Clasificación */}
            <section className="section bg-gray">
                <div className="container">
                    <SectionTitle
                        badge="Sistema de Clasificación"
                        title="Niveles de Capacidad Operativa"
                        subtitle="Las unidades se clasifican según nivel de equipamiento, complejidad técnica y volumen de producción."
                        align="center"
                    />

                    <div className="unidades__clasificacion">
                        <div className="unidades__clasificacion-item">
                            <span className="unidades__clasificacion-tipo">Tipo A</span>
                            <h4>Alta Capacidad</h4>
                            <p>Equipamiento completo, producción en serie, certificaciones avanzadas.</p>
                        </div>
                        <div className="unidades__clasificacion-item">
                            <span className="unidades__clasificacion-tipo">Tipo B</span>
                            <h4>Capacidad Media</h4>
                            <p>Equipamiento estándar, producción por encargo, certificaciones intermedias.</p>
                        </div>
                        <div className="unidades__clasificacion-item">
                            <span className="unidades__clasificacion-tipo">Tipo C</span>
                            <h4>Capacidad Básica</h4>
                            <p>Equipamiento básico, formación predominante, certificaciones iniciales.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Listado de Unidades */}
            <section className="section">
                <div className="container">
                    <SectionTitle
                        badge="Catálogo"
                        title="Unidades Operativas"
                        subtitle="Detalle de capacidades, equipamiento y certificaciones por unidad de ejecución técnica."
                    />

                    <div className="unidades__lista">
                        {unidades.map((unidad) => (
                            <article key={unidad.id} className="unidades__item" id={unidad.id}>
                                <div className="unidades__item-header">
                                    <div className="unidades__item-icon">
                                        <unidad.icon size={28} />
                                    </div>
                                    <div>
                                        <span className="unidades__item-clasificacion">{unidad.clasificacion}</span>
                                        <h3 className="unidades__item-nombre">{unidad.nombre}</h3>
                                    </div>
                                </div>

                                <p className="unidades__item-descripcion">{unidad.descripcion}</p>

                                <div className="unidades__item-grid">
                                    <div className="unidades__item-col">
                                        <h4>Capacidades Técnicas</h4>
                                        <ul>
                                            {unidad.capacidades.map((cap, i) => (
                                                <li key={i}>
                                                    <CheckCircle2 size={14} />
                                                    <span>{cap}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="unidades__item-col">
                                        <h4>Equipamiento Disponible</h4>
                                        <ul>
                                            {unidad.equipamiento.map((eq, i) => (
                                                <li key={i}>
                                                    <CheckCircle2 size={14} />
                                                    <span>{eq}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="unidades__item-col">
                                        <h4>Certificaciones</h4>
                                        <ul>
                                            {unidad.certificaciones.map((cert, i) => (
                                                <li key={i}>
                                                    <CheckCircle2 size={14} />
                                                    <span>{cert}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Botón de ficha técnica */}
                                <div className="unidades__item-footer">
                                    {unidad.fichaUrl ? (
                                        <Link to={unidad.fichaUrl} className="unidades__item-link">
                                            Ver ficha técnica completa
                                            <ArrowRight size={16} />
                                        </Link>
                                    ) : (
                                        <span className="unidades__item-link unidades__item-link--disabled">
                                            Ficha técnica próximamente
                                        </span>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nota Técnica */}
            <section className="section bg-gray">
                <div className="container container--narrow">
                    <div className="unidades__nota">
                        <h3>Nota Técnica</h3>
                        <p>
                            Las capacidades detalladas corresponden al estado operativo actual.
                            La disponibilidad de equipamiento y personal técnico puede variar
                            según programación institucional. Para consultas específicas sobre
                            capacidad de producción o presupuestos, contactar al área administrativa.
                        </p>
                        <p>
                            Todas las unidades operan bajo supervisión técnica y cumplen con
                            normativas de seguridad e higiene laboral vigentes.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default UnidadesTecnicas;
