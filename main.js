/* *************************** Grafica *************************** */

let elementosDivBarra = document.getElementsByClassName('div-barra');
let butmValoresRandom = document.getElementById('butm-valores-random');
butmValoresRandom.onclick = modificarGrafica;

cambiarColorBarra();
function cambiarColorBarra() {
    let colores = ['#856c8b', '#e2979c', '#17706e', '#ffa931', '#f3c623', '#438a5e', '#12cad6'];
    for (let i = 0; i < elementosDivBarra.length; i++) {
        elementosDivBarra[i].style.backgroundColor = colores[i];
    }
}

modificarGrafica();
function modificarGrafica() {
    for (let i = 0; i < elementosDivBarra.length; i++) {
        let minutosEstudio = Math.floor(Math.random() * 301);
        let converMinutosPixel = Math.round(minutosEstudio*(50/60));
        elementosDivBarra[i].style.height = `${converMinutosPixel}px`;
        elementosDivBarra[i].firstChild.innerText = `${minutosEstudio}min`;
        elementosDivBarra[i].style.transition = '2s';
    }
}