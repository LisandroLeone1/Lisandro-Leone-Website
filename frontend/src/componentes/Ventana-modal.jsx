import './Ventana-modal.css';
import React, { use, useEffect, useState } from 'react';

const Ventana = ({proyecto, onClose, modalVisible}) => {

    const [imagenActual, setImagenActual] = useState(0);

    const imagenes = [proyecto.imagen,
        proyecto.imagen2,
        proyecto.imagen3,
        proyecto.imagen4
    ].filter(img => img);

    const imagen = imagenes[imagenActual];

    return (
        <div className={`modal ${modalVisible ? 'show' : ''}`}>
            <div className="modal__container">
                <div className="modal-tittle">
                    <h1>{ proyecto.nombre }</h1>
                    <span onClick={onClose}>X</span>
                </div>
                <div className="modal-main">
                    <div className="modal-img">
                        <img src={ imagen } alt=""></img>
                        <div className="button-img-container">   
                            {imagenes.map((imagen, indice) => (
                            <button value={indice}  onMouseOver={() => {
                                setImagenActual(indice)
                            }}className="button-img"></button>
                            ))}
                        </div>
                    </div>
                    <div className="modal-content">
                        <h3>Información del proyecto</h3>
                        <ul>
                            <li>Categoria:<span>{proyecto.categoria}</span></li>
                            <li>Fecha de inicio: <span>{proyecto.fecha_inicio}</span></li>
                            <li>Estado del proyecto: <span>{ proyecto.get_estado_display }</span></li>
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