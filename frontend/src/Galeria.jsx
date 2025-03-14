import './App.css';
import React, { useEffect, useState } from 'react';
import Ventana from './componentes/Ventana-modal';

const Galeria = () => {
    const [proyectos, setProyectos] = useState([]);
    const [proyectosFiltrados, setProyectosFiltrados] = useState([]); // Lista filtrada
    const [modalVisible, setModalVisible] = useState(false);
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
    const [filtro, setFiltro] = useState("todos"); // Estado para el filtro

    useEffect(() => {
        fetch('https://lisandroleone-ea8864731e74.herokuapp.com/portfolio/api/v1/proyectos/') // URL de la API de Django
            .then(response => response.json())
            .then(data => {
                console.log(data); 
                setProyectos(data);
                setProyectosFiltrados(data); // Se inicializa la lista filtrada
            })
            .catch(error => console.error("Error al obtener proyectos", error));
    }, []);

    // Función para filtrar proyectos según el estado seleccionado
    const filtrarProyectos = (estado) => {
        setFiltro(estado);
        if (estado === "todos") {
            setProyectosFiltrados(proyectos);
        } else {
            setProyectosFiltrados(proyectos.filter(proyecto => proyecto.estado === estado));
        }
    };

    const abrirModal = (proyecto) => {
        setProyectoSeleccionado(proyecto);
        setModalVisible(true);
    };

    const cerrarModal = () => {
        setProyectoSeleccionado(null);
        setModalVisible(false);
    };

    return (
        <div>
            {/* Filtros */}
            <div className="filtros-container">
                <ul className="filtros-list">
                    <li className={filtro === "todos" ? "active" : ""} onClick={() => filtrarProyectos("todos")}>
                        <span className="filtros-option">Todo</span>
                    </li>
                    <li className={filtro === "terminado" ? "active" : ""} onClick={() => filtrarProyectos("terminado")}>
                        <span className="filtros-option">Terminado</span>
                        <i className="bi bi-circle-fill" style={{ color: "green", fontSize: "small" }}></i>
                    </li>
                    <li className={filtro === "en_desarrollo" ? "active" : ""} onClick={() => filtrarProyectos("en_desarrollo")}>
                        <span className="filtros-option">En desarrollo</span>
                        <i className="bi bi-circle-fill" style={{ color: "blue", fontSize: "small" }}></i>
                    </li>
                    <li className={filtro === "cancelado" ? "active" : ""} onClick={() => filtrarProyectos("cancelado")}>
                        <span className="filtros-option">Cancelado</span>
                        <i className="bi bi-circle-fill" style={{ color: "red", fontSize: "small" }}></i>
                    </li>
                </ul>
            </div>

            {/* Galería de proyectos filtrados */}
            <div className="portafolio-container">
                {proyectosFiltrados.map((proyecto) => (                
                    <div className="portafolio-item" key={proyecto.id}>
                        <div 
                            className="portafolio-wrap"
                            style={{
                                backgroundImage: `url(${proyecto.imagen})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div className="overlay">
                                <h3>{proyecto.nombre}</h3>
                                <p className="parrafo">{proyecto.categoria}</p>
                                <i className="bi bi-plus-lg link-portafolio" onClick={() => abrirModal(proyecto)}></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Ventana Modal */}
            {modalVisible && (
                <Ventana 
                    proyecto={proyectoSeleccionado}
                    onClose={cerrarModal} 
                    modalVisible={modalVisible}
                />
            )}
        </div>
    );
};

export default Galeria;

