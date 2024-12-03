
const openButtons = document.querySelectorAll('[id^="modal-open-"]'); // obtengo todos los elementos que comiencen con moda-open
const closeButtons = document.querySelectorAll('[id^="modal-close-"]');

const activarModal = (event) => {
    const modalId = event.target.id.replace('modal-open-', 'modal-'); // reemplazo el id del boton en el que se hizo click por el id del modal
    document.getElementById(modalId).classList.add('show');
};

const cerrarModal = (event) => {
    const modalId = event.target.id.replace('modal-close-', 'modal-');
    document.getElementById(modalId).classList.remove('show');
};

// asigno evento a cada botón de abrir
openButtons.forEach(button => {
    button.addEventListener('click', activarModal);
});

closeButtons.forEach(button => {
    button.addEventListener('click', cerrarModal);
});
