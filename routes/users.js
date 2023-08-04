var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {user:'AJMAL M'})
});


router.get('/name', (req, res) => {
  res.send("Name of The User")
})

module.exports = router;
