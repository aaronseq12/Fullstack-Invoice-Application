import fp from 'fastify-plugin';
import { Sequelize } from 'sequelize';
import { initModels } from '../models/index.js'; // Import initModels

async function sequelizePlugin(server, options) {
    const sequelize = new Sequelize('postgres://myuser:mypassword@localhost:5432/mydatabase', {
        dialect: 'postgres',
        logging: false,
    });

    try {
        await sequelize.authenticate();
        server.log.info('Database connection has been established successfully.');
    } catch (error) {
        server.log.error('Unable to connect to the database:', error);
    }

    // Initialize your models
    initModels(sequelize);

    server.decorate('db', { sequelize });

    server.addHook('onClose', (instance, done) => {
        sequelize.close().then(done).catch(done);
    });
}

export default fp(sequelizePlugin);