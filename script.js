function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}

  function mostrarContenido(opcion) {
    const contenido = {
      docente: "<h3>Docente a Cargo</h3><p>Mg. Ing. Hugo O. Ortega</p>",
      jtp: "<h3>Jefe de TP</h3><p>Ing. Luis Ortiz</p>",
      requisitos: `<h3>Requisitos</h3>
        <p>Algoritmos y Estructura de Datos</p>
        <p>Arquitectura y Organización de Computadoras</p>`,
      teoria: `<h3>Días de Teoría</h3>
        <p>Lunes 17:00 a 18:30</p>
        <p>Miércoles 18:30 a 20:00</p>`,
      practica: `<h3>Días de Práctica</h3>
        <p>Martes 19:00 a 20:30</p>
        <p>Jueves 19:00 a 20:30</p>`,
      TeoCompleta:
      `<h3>Capitulo I - Introducción a las Comunicaciones: <a href="PDF/Comunicaciones/clase 1_comun1_2025.pdf" target="_blank">Ver</a></h3>`
      `<h3>Capítulo 2 - Arquitectura de Protocolos: <a href="PDF/Comunicaciones/clase 2_comun1_2025.pdf" target="_blank">Ver</a></h3>`
    };

    document.getElementById("contenidoDinamico").innerHTML = contenido[opcion];
  }

