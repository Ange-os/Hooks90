const texKit = document.querySelector('.text-kit h4');
const colorPrincipal = getComputedStyle(document.documentElement).getPropertyValue('--color-principal').trim();
window.addEventListener('load', () =>{
    setTimeout(() =>{
        texKit.style.color = colorPrincipal; 
        texKit.classList.add('tex-luz');
    }, 500)
})