const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Importa e usa as rotas de usuário
const usuarioRoute = require('./routes/usuarioRoute.js');
app.use('/api/usuario', usuarioRoute);

// Importa e usa as rotas de favoritos
const favoritosRoute = require('./routes/favoritosRoute.js');
app.use('/api/usuario/favoritos', favoritosRoute);

// Importa e usa as rotas de histórico
const historicoRoute = require('./routes/historicoRoute.js');
app.use('/api/usuario/historico', historicoRoute);

// Importa e usa as rotas de vídeos
const videoRoutes = require('./routes/videoRoute.js');
app.use('/api/videos/filmes', videoRoutes);

module.exports = app;