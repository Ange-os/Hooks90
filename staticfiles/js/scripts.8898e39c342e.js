window.addEventListener('scroll', function() {
    const altura = window.innerHeight / 1.6;
    let fotoPerfil = document.getElementById('foto-perfil')
    let textBio = document.getElementById("text-prencentacion")
    let distancia = fotoPerfil.getBoundingClientRect().top;
    if(distancia <= altura){
        fotoPerfil.style.opacity = 1;
        textBio.classList.add('text-efecct')
    }
    else{
        fotoPerfil.style.opacity = 0;
        textBio.classList.remove('text-efecct')
    }
})
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector('footer');
    const redesButtons = document.querySelectorAll('.redes-footer a');

    function isFooterInView() {
        const rect = footer.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    function activateButtonAnimation() {
        redesButtons.forEach((button, index) => {
            setTimeout(() => {
                // Añadir clase 'active' para la animación de escala
                button.classList.add('active');
                
                // Añadir clase de color temporal durante la animación
                button.classList.add('color-animado');

                // Remover clase de color después de la animación (por ejemplo, 2 segundos)
                setTimeout(() => {
                    button.classList.remove('color-animado');
                }, 800); // Duración que mantendrá el color antes de volver a blanco
            }, index * 200); // Retraso entre botones
        });
    }

    window.addEventListener('scroll', () => {
        if (isFooterInView()) {
            activateButtonAnimation();
        }
    });
});

window.addEventListener('scroll', function () {
    const altura = window.innerHeight / 1.6;
    const kit = document.querySelector('.text-kit');
    const texKit = document.querySelector('.text-kit h4');

    if (!kit || !texKit) return; // Salir si los elementos no existen

    const colorPrincipal = getComputedStyle(document.documentElement).getPropertyValue('--color-principal').trim();
    const colorApagado = getComputedStyle(document.documentElement).getPropertyValue('--color-apagado').trim();

    const distancia = kit.getBoundingClientRect().top;

    if (distancia <= altura) {
        texKit.style.color = colorPrincipal; 
        texKit.classList.add('tex-luz')
    }else{
        texKit.style.color = colorApagado;
        texKit.classList.remove('tex-luz')
    }
});

window.addEventListener('scroll', function () {
    const altura = window.innerHeight / 1.2; // Umbral para activar la animación
    const images = document.querySelectorAll('.foto-kit img');

    images.forEach((image) => {
        const distancia = image.getBoundingClientRect().top;

        if (distancia <= altura) {
            image.classList.add('show'); // Aplica la animación
        }
        else{
            image.classList.remove('show')
        }
    });
});
