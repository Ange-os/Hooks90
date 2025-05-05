console.log("Archivo JS cargado correctamente");

let cards = document.querySelectorAll('.custom-card');

window.addEventListener('load', () => {

    setTimeout( ()=>{
        cards.forEach((card, index) => {
        // Configurar un temporizador con un retraso para cada tarjeta
        setTimeout(() => {
            // Agregar la clase de resalte
            card.classList.add('highlight');
            
            // Remover la clase después de 1 segundo
            setTimeout(() => {
                card.classList.remove('highlight');
            }, 350); // Cambia el color por 1 segundo
        }, index * 200); // Retraso de 0.5 segundos entre cada tarjeta
    });
    }, 350)
    

});


document.addEventListener('DOMContentLoaded', function () {
    const kit = document.querySelector('iframe');
    const texKit = document.querySelector('.text-kit h4');
    window.addEventListener('scroll', function () {
        const altura = window.innerHeight / 1.6;
        const distancia = kit ? kit.getBoundingClientRect().top : null;
        const colorPrincipal = getComputedStyle(document.documentElement).getPropertyValue('--color-principal').trim();
        const colorApagado = getComputedStyle(document.documentElement).getPropertyValue('--color-apagado').trim();
        if (kit && texKit && distancia <= altura) {
            texKit.style.color = colorPrincipal; 
            texKit.classList.add('tex-luz');
        } else if (kit && texKit) {
            texKit.style.color = colorApagado;
            texKit.classList.remove('tex-luz');
        }
    });
});

window.addEventListener('scroll', function () {
    console.log("ajdsadasdm")
    const altura = window.innerHeight / 1.2; // Umbral para activar la animación
    const images = document.querySelector('.reproductor-spotyfy-div iframe');
        const distancia = images.getBoundingClientRect().top;
        if (distancia <= altura) {
            console.log("ajdsadasdm")
            images.classList.add('show'); // Aplica la animación
        }
        else{
            images.classList.remove('show')
        }
});