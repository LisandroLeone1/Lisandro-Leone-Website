document.addEventListener('DOMContentLoaded', () => {
    const typeWriter = (element, text, speed, callback) => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(interval);
                if (callback) callback(); // Ejecuta el callback si existe
            }
        }, speed);
    };

    const mainText = document.getElementById('typewriter-text');
    const subText = document.getElementById('typewriter-subtext');

  // Efecto para "DESARROLLADOR JUNIOR"
    typeWriter(mainText, "DESARROLLADOR JUNIOR:", 200, () => {
    // oculto el cursor de la primera frase
        mainText.classList.add('no-cursor');
    
    // agrego un retraso de 0.5 segundo antes de iniciar "FULL STACK"
        setTimeout(() => {
            typeWriter(subText, "FULL STACK", 200);
        }, 500); 
    });
});