const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Nombre del archivo JSON donde se encuentra tu base de datos
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3001; // Puerto en el que se ejecutará el servidor

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

