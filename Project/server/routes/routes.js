module.exports = (app) => {
    const users = require('../controller/userController.js');

    app.post('/users', users.create);

   
}

