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
      docente: "<h3>Docente a Cargo</h3><p>Mg. Ing. Hugo O. Ortega</p><h3>Jefe de TP</h3><p>Ing. Luis Ortiz</p>",
      requisitos: `<h3>Requisitos</h3>
        <p>Algoritmos y Estructura de Datos</p>
        <p>Arquitectura y Organización de Computadoras</p>`,
      horarios: `<h3>Días de Teoría</h3>
        <p>Lunes 17:00 a 18:30</p>
        <p>Miércoles 18:30 a 20:00</p>
        <h3>Días de Práctica</h3>
        <p>Martes 19:00 a 20:30</p>
        <p>Jueves 19:00 a 20:30</p>`,
      TeoCompleta:
      `<h3>Capitulo I - Introducción a las Comunicaciones: <a href="PDF/Comunicaciones/clase 1_comun1_2025.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 2 - Arquitectura de Protocolos: <a href="PDF/Comunicaciones/clase 2_comun1_2025.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 3 - Conceptos de Señales: <a href="PDF/Comunicaciones/clase 3_comun1_2025.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 4 - Transmisión de Datos <a href="PDF/Comunicaciones/clase 4_comun1_2025.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 5 - Medios de transmisión: <a href="PDF/Comunicaciones/clase 5_comun1_2025.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 6 - Codificación y Modulación de Señales: <a href="PDF/Comunicaciones/clase 6_comun1_2025.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 7 - Redes LAN: <a href="PDF/Comunicaciones/clase 7_comun1_2025.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 8 - Protocolo Ethernet: <a href="PDF/Comunicaciones/clase 8_comun1_2025.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 9 - LAN Inalámbrica: <a href="PDF/Comunicaciones/clase 9_comun1_2025.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 10 - Normas de cableado estructurado: <a href="PDF/Comunicaciones/clase 10_comun1_2025.pdf" target="_blank">Ver</a></h3>`,
      TeoDocente:
      `<h3>Capitulo I - Introducción a las Comunicaciones: <a href="PDF/Comunicaciones/Capítulo 1_teoria_2025.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 2 - Arquitectura de Protocolos: <a href="PDF/Comunicaciones/Capítulo 2_teoria_2025.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 3 - Conceptos de Señales: <a href="PDF/Comunicaciones/Capítulo 3_teoria_2025.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 4 - Transmisión de Datos <a href="PDF/Comunicaciones/Capítulo 4_teoria_2023.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 5 - Medios de transmisión: <a href="PDF/Comunicaciones/Capítulo 5_teoria_2025.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 6 - Codificación y Modulación de Señales: <a href="PDF/Comunicaciones/Capítulo 6_teoria_2025.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 7 - Redes LAN: <a href="PDF/Comunicaciones/Capítulo 7_teoria_2025.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 8 - Protocolo Ethernet: <a href="PDF/Comunicaciones/Capítulo 8_teoria_2025.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 9 - LAN Inalámbrica: <a href="PDF/Comunicaciones/Capítulo 9_teoria_2025.pdf" target="_blank">Ver</a></h3>
      <h3>Capítulo 10 - Normas de cableado estructurado: <a href="PDF/Comunicaciones/Capítulo 10_teoria_2025.pdf" target="_blank">Ver</a></h3>` 
    };

    document.getElementById("contenidoDinamico").innerHTML = contenido[opcion];
  }

