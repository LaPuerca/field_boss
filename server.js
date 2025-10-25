const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// API simulada con tiempos dinámicos
app.get('/api/timers', (req, res) => {
  const bosses = [
    { nombre: 'Azure Dragon', tiempo: Math.floor(Math.random() * 60) },
    { nombre: 'Crimson Serpent', tiempo: Math.floor(Math.random() * 60) },
    { nombre: 'Dark Phoenix', tiempo: Math.floor(Math.random() * 60) }
  ];
  res.json(bosses);
});

app.listen(PORT, () => console.log(`Servidor activo en puerto ${PORT}`));
