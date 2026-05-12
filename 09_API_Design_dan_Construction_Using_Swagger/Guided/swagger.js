import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Film Yang Ditonton',
      version: '1.0.0',
      description: 'API sederhana dari Express untuk menampilkan daftar film yg pernah ditonton',
    },
  },
  apis: ['./app.js'],
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };