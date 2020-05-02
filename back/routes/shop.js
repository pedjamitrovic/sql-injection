var express = require('express');
var router = express.Router();

router.get('/products', function(req, res, next) {
    var name = '';
    if (req.query.name) name = req.query.name;

    var con = req.app.get('con');
    con.query(`SELECT * FROM products WHERE name LIKE '%${name}%'`, 
        function (err, result, fields) {
            if (err) {
                res.json(err);
            } 
            else {
                res.json(result);
            }
        }
    );
});

module.exports = router;
