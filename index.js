var express = require(‘express’);
var app = express();
var userRouter = express.Router();
userRouter.get(‘/’, function(req, res) { });
userRouter.post(‘/’, function(req, res) { });
userRouter.get(‘/:id’, lookupUser,function(req, res) { 
			res.json(req.user);
});
userRouter.patch(‘/:id’, lookupUser, function(req, res) { });
userRouter.delete(‘/:id’, lookupUser, function(req, res) { });
app.use(‘/users’, userRouter);

module.exports = app;

function lookupUser(req, res, next) {
  // We access the ID param on the request object
  var userId = req.params.id;
  // Build an SQL query to select the resource object by ID
  var sql = ‘SELECT * FROM AppUsers WHERE id = ?’;
  postgres.client.query(sql, [ userId ], function(err, results) {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      return res.json({ errors: [‘Could not retrieve user’] });
    }
    // No results returned mean the object is not found
    if (results.rows.length === 0) {
      // We are able to set the HTTP status code on the res object
      res.statusCode = 404;
      return res.json({ errors: [‘User not found’] });
    }
    // By attaching a User property to the request
    // Its data is now made available in our handler function
    req.user = results.rows[0];
    next();
  });
}