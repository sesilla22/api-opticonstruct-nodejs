const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Opticonstruct',
      version: '1.0.0',
      description: 'Documentación de mi API de nómina híbrida',
    },
    servers: [
      { url: 'https://api-opticonstruct-nodejs-18k4.onrender.com' }
    ],
  },
  apis: ['./src/routers/*.js'], // Asegúrate de que apunte a tus archivos de rutas
};

module.exports = swaggerJsdoc(options);