// Load the 'tasks' controller
var tasks = require('../../app/controllers/tasks.server.controller');
var index = require('../../app/controllers/index.server.controller');
// Define the routes module' method
module.exports = function (app) {
    // Set up the 'users' base routes
    // a post request to /tasks will execute createTask method in tasks.server.controller
    app.route('/tasks').get(index.render).post(tasks.createTask);
    app.route('/usersDb/:name').get(users.read);

};
