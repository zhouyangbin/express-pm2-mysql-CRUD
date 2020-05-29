var user = {
    insert: 'INSERT INTO users(id, sex, name, age) VALUES(?,?,?,?)',
    update: 'UPDATE users SET name=?, age=? WHERE id=?',
    delete: `DELETE FROM users WHERE id IN (?)`,
    queryById: 'SELECT * FROM users WHERE id=?',
    queryAll: 'SELECT * FROM users'
};
module.exports = user;