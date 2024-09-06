const sequelize = require('./database/database.js');
const app = require('./app.js');

const PORT = 3000;

sequelize.authenticate()
    .then(() => {
        console.log('Conexión establecida correctamente');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos: ', err);
    });

sequelize.sync({ alter: true })
    .then(() => {
        console.log('Modelos sincronizados correctamente.');
    })
    .catch(err => {
        console.error('No se pudo sincronizar los modelos: ', err);
    });

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
