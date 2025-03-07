// Navegación por secciones
const secciones = document.querySelectorAll('.proposal-card');
let seccionActual = 0;

function mostrarSiguienteSeccion() {
  secciones[seccionActual].classList.add('hidden');
  seccionActual++;
  if (seccionActual < secciones.length) {
    secciones[seccionActual].classList.remove('hidden');
  } else {
    seccionActual = 0;
    secciones[seccionActual].classList.remove('hidden');
  }
}

// Asigna el evento al botón de continuar
document.querySelectorAll('#continuar').forEach((boton) => {
  boton.addEventListener('click', mostrarSiguienteSeccion);
});

// Contador en tiempo real
const fechaInicio = new Date('2024-10-08').getTime();

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById('dias').textContent = dias;
  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// Reproducir música al tocar la pantalla
document.addEventListener("click", function () {
  let audio = document.getElementById("background-music");
  if (audio.paused) {
    audio.play();
  }
});
