async function cargarTimers() {
  const contenedor = document.getElementById('timer-list');
  contenedor.innerHTML = '<p>Cargando...</p>';
  try {
    const res = await fetch('/api/timers');
    const data = await res.json();
    contenedor.innerHTML = '';
    data.forEach(boss => {
      const div = document.createElement('div');
      div.className = 'boss-card';
      div.innerHTML = `
        <div class="boss-name">${boss.nombre}</div>
        <div class="boss-timer">⏱️ Respawn en ${boss.tiempo} min</div>
      `;
      contenedor.appendChild(div);
    });
  } catch (e) {
    contenedor.innerHTML = '<p>Error al cargar datos del servidor.</p>';
  }
}
setInterval(cargarTimers, 60000);
cargarTimers();
