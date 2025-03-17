import './Ventana-modal.css';
import React, { useState } from 'react';

const Ventana = ({ proyecto, onClose, modalVisible }) => {
    const [imagenActual, setImagenActual] = useState(0);
    let startX = 0;

    const imagenes = [proyecto.imagen, proyecto.imagen2, proyecto.imagen3, proyecto.imagen4].filter(img => img);
    const imagen = imagenes[imagenActual];

    const ESTADO_CHOICES = {
        en_desarrollo: "En Desarrollo",
        terminado: "Terminado",
        pausado: "Pausado",
        cancelado: "Cancelado",
    };

    const handleTouchStart = (e) => {
        startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        if (!startX) return;
        const endX = e.touches[0].clientX;
        const diffX = startX - endX;

        if (diffX > 50) {
            // Deslizar a la izquierda (siguiente imagen)
            setImagenActual((prev) => (prev + 1) % imagenes.length);
        } else if (diffX < -50) {
            // Deslizar a la derecha (imagen anterior)
            setImagenActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);
        }

        startX = 0; // Resetear el punto de inicio
    };

    return (
        <div className={`modal ${modalVisible ? 'show' : ''}`}>
            <div className="modal__container">
                <div className="modal-tittle">
                    <h1>{proyecto.nombre}</h1>
                    <span onClick={onClose}>X</span>
                </div>
                <div className="modal-main">
                    <div className="modal-img"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                    >
                        <img src={imagen} alt="" />
                        <div className="button-img-container">
                            {imagenes.map((_, indice) => (
                                <button
                                    key={indice}
                                    onMouseOver={() => setImagenActual(indice)}
                                    className={`button-img ${indice === imagenActual ? 'hover' : ''}`}
                                ></button>
                            ))}
                        </div>
                    </div>
                    <div className="modal-content">
                        <h3>Información del proyecto</h3>
                        <ul>
                            <li>Categoria:<span>{proyecto.categoria}</span></li>
                            <li>Fecha de inicio: <span>{proyecto.fecha_inicio}</span></li>
                            <li>Estado del proyecto: <span>{ESTADO_CHOICES[proyecto.estado]}</span></li>
                            <li>Tecnologias aplicadas: <span>{proyecto.lenguajes}</span></li>
                        </ul>
                        <p>{proyecto.descripcion}</p>
                    </div>
                </div>
                <div className="modal-link">
                    <a href={proyecto.url} className="link-portafolio">Ir al repositorio <i class="bi bi-box-arrow-in-up-right"></i></a>
                </div>
            </div>
        </div> 
    )
}

export default Ventana;