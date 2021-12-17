const server = require ('./ config / server');

const db = require ('./ config / database');
db.DB;

server.listen (3000, () => {
    console.log (`Servidor em execução em http: // localhost: 3000`);
});
