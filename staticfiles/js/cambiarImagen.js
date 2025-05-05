document.addEventListener("DOMContentLoaded", function () {
    const imgCambiante = document.getElementById("img-cambiante");
    if (!imgCambiante) return;

    let currentIndex = 0;

    function cambiarImg() {
        imgCambiante.classList.remove("active");

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            imgCambiante.src = images[currentIndex];
            imgCambiante.classList.add("active");
        }, 200); // Suaviza la transición en 500ms
    }

    setInterval(cambiarImg, 4000); // Cambia cada 5 segundos
});