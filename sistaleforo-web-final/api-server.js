const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const fetch = require('node-fetch'); // Asegúrate de instalar esta librería si aún no está instalada

const app = express();
const port = process.env.API_PORT || 3001;
const apiServerUrl = process.env.API_SERVER_URL; // URL de tu servidor API

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

// Ruta que actúa como proxy a tu servidor API
app.get('/api/shows', async (req, res) => {
  try {
    const response = await fetch(`${apiServerUrl}/shows`); // Asume que tu API tiene una ruta /shows
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error('Error fetching data from the API server:', error);
    res.status(500).send({ message: 'Failed to fetch data' });
  }
});

const server = app.listen(port, () => console.log(`API Server listening on port ${port}`));
process.on('SIGINT', () => server.close());
