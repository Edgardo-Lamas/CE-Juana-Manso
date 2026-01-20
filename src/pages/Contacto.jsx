import { useState } from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    Building,
    FileText,
    Users
} from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import './Contacto.css';

// Tipos de consulta
const tiposConsulta = [
    { value: '', label: 'Seleccionar tipo de consulta' },
    { value: 'convenio', label: 'Convenio institucional' },
    { value: 'produccion', label: 'Solicitud de producción' },
    { value: 'academico', label: 'Información académica' },
    { value: 'documentacion', label: 'Documentación institucional' },
    { value: 'otro', label: 'Otra consulta' },
];

function Contacto() {
    const [formData, setFormData] = useState({
        institucion: '',
        nombre: '',
        cargo: '',
        email: '',
        telefono: '',
        tipoConsulta: '',
        mensaje: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de envío
        console.log('Form submitted:', formData);
        alert('Mensaje enviado. Nos comunicaremos a la brevedad.');
    };

    return (
        <main className="contacto">
            <Hero
                badge="Comunicación Institucional"
                title="Contacto"
                subtitle="Canal oficial de consultas"
                description="Información de contacto para organismos públicos, instituciones educativas, ONGs y entidades interesadas en articulación o servicios técnicos."
                variant="compact"
            />

            {/* Información de Contacto */}
            <section className="section">
                <div className="container">
                    <div className="contacto__grid">
                        {/* Información */}
                        <div className="contacto__info">
                            <SectionTitle
                                badge="Datos Institucionales"
                                title="Información de Contacto"
                            />

                            <div className="contacto__datos">
                                <div className="contacto__dato">
                                    <div className="contacto__dato-icon">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4>Dirección</h4>
                                        <p>Dirección institucional<br />Ciudad, Provincia</p>
                                    </div>
                                </div>

                                <div className="contacto__dato">
                                    <div className="contacto__dato-icon">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4>Teléfono</h4>
                                        <p>+54 (000) 000-0000</p>
                                    </div>
                                </div>

                                <div className="contacto__dato">
                                    <div className="contacto__dato-icon">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4>Correo Electrónico</h4>
                                        <p>contacto@cejuanamanso.edu.ar</p>
                                    </div>
                                </div>

                                <div className="contacto__dato">
                                    <div className="contacto__dato-icon">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <h4>Horario de Atención</h4>
                                        <p>Lunes a Viernes<br />9:00 a 16:00 hs</p>
                                    </div>
                                </div>
                            </div>

                            {/* Áreas de contacto */}
                            <div className="contacto__areas">
                                <h4>Áreas específicas</h4>
                                <div className="contacto__area">
                                    <Building size={16} />
                                    <div>
                                        <span>Dirección</span>
                                        <p>direccion@cejuanamanso.edu.ar</p>
                                    </div>
                                </div>
                                <div className="contacto__area">
                                    <FileText size={16} />
                                    <div>
                                        <span>Área Administrativa</span>
                                        <p>admin@cejuanamanso.edu.ar</p>
                                    </div>
                                </div>
                                <div className="contacto__area">
                                    <Users size={16} />
                                    <div>
                                        <span>Área Académica</span>
                                        <p>academica@cejuanamanso.edu.ar</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Formulario */}
                        <div className="contacto__form-wrapper">
                            <div className="contacto__form-header">
                                <h3>Formulario de Contacto</h3>
                                <p>Complete el formulario para consultas institucionales.</p>
                            </div>

                            <form className="contacto__form" onSubmit={handleSubmit}>
                                <div className="contacto__form-row">
                                    <div className="contacto__form-group">
                                        <label htmlFor="institucion">Institución / Organismo *</label>
                                        <input
                                            type="text"
                                            id="institucion"
                                            name="institucion"
                                            value={formData.institucion}
                                            onChange={handleChange}
                                            required
                                            placeholder="Nombre de la institución"
                                        />
                                    </div>
                                </div>

                                <div className="contacto__form-row contacto__form-row--2">
                                    <div className="contacto__form-group">
                                        <label htmlFor="nombre">Nombre completo *</label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                            placeholder="Nombre y apellido"
                                        />
                                    </div>
                                    <div className="contacto__form-group">
                                        <label htmlFor="cargo">Cargo / Función</label>
                                        <input
                                            type="text"
                                            id="cargo"
                                            name="cargo"
                                            value={formData.cargo}
                                            onChange={handleChange}
                                            placeholder="Cargo institucional"
                                        />
                                    </div>
                                </div>

                                <div className="contacto__form-row contacto__form-row--2">
                                    <div className="contacto__form-group">
                                        <label htmlFor="email">Correo electrónico *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="correo@institucion.gob.ar"
                                        />
                                    </div>
                                    <div className="contacto__form-group">
                                        <label htmlFor="telefono">Teléfono</label>
                                        <input
                                            type="tel"
                                            id="telefono"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            placeholder="+54 (000) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div className="contacto__form-row">
                                    <div className="contacto__form-group">
                                        <label htmlFor="tipoConsulta">Tipo de consulta *</label>
                                        <select
                                            id="tipoConsulta"
                                            name="tipoConsulta"
                                            value={formData.tipoConsulta}
                                            onChange={handleChange}
                                            required
                                        >
                                            {tiposConsulta.map((tipo) => (
                                                <option key={tipo.value} value={tipo.value}>
                                                    {tipo.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="contacto__form-row">
                                    <div className="contacto__form-group">
                                        <label htmlFor="mensaje">Mensaje *</label>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            value={formData.mensaje}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder="Detalle su consulta o requerimiento..."
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn--primary contacto__form-btn">
                                    Enviar mensaje
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nota sobre convenios */}
            <section className="section bg-gray">
                <div className="container container--narrow">
                    <div className="contacto__convenios">
                        <h3>Convenios Institucionales</h3>
                        <p>
                            Para la formalización de convenios de cooperación, articulación técnica
                            o provisión de servicios, la institución solicitante deberá presentar:
                        </p>
                        <ul>
                            <li>Nota formal en papel membretado dirigida a la Dirección</li>
                            <li>Descripción del objeto del convenio propuesto</li>
                            <li>Datos de contacto del área responsable</li>
                            <li>Documentación institucional de respaldo</li>
                        </ul>
                        <p>
                            Las solicitudes serán evaluadas por el área correspondiente y la
                            respuesta será comunicada en un plazo de 15 días hábiles.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contacto;
