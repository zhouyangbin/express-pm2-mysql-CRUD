const sequelize = require('./db')

const Sequelize = require('sequelize');
const Model = Sequelize.Model;
class User extends Model {}
User.init({
    // 属性
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    created_at: {
        type: Sequelize.STRING,
        allowNull: false
    },
    is_admin: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'users'
        // 参数
});
// User.findAll({
//     where: {
//         password: '2'
//     }
// }).then(users => {
//     console.log(users)
// });
module.exports = User