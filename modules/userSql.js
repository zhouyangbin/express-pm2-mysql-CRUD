var user = {
    login: "SELECT * FROM users WHERE name= ? AND password = ?",
    checkName: 'SELECT * FROM users WHERE name=?',
    regist: 'INSERT INTO users(name, password,email) VALUES(?,?,?)',
    update: 'UPDATE users SET name=?, age=? WHERE id=?',
    delete: `DELETE FROM users WHERE id IN (?)`,
    queryById: 'SELECT * FROM users WHERE id=?',
    queryAll: 'SELECT * FROM users'
};
module.exports = user;