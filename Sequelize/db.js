const Sequelize = require('sequelize');
const config = require('./config');
// 选项1：分别传入参数
const sequelize = new Sequelize(config.dbName, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
    port: config.port,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
            // paranoid: true,
            // createdAt: 'created_at',
            // updatedAt: 'updated_at',
            // deletedAt: 'deleted_at',
            // //驼峰变下划线
            // underscored: true
    }
});
sequelize.authenticate().then(() => {
    console.log('successfully.');
}).catch(err => {
    console.error('Unable to connect to the database: fail', err);
});
// sequelize.sync({
//     force: false
// })
module.exports = sequelize