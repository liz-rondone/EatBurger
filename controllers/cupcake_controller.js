var express = require('express');

var router = express.Router();

var cupcake = require("../models/cupcake.js");

//create all routes and set up logic within those routes where required

// select
router.get('/', function(req, res) {
    cupcake.all(function(data) {
        var hbsObject = {
            cupcakes: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

// insert
router.post('/', function(req, res) {
    cupcake.create([
        // "name" or "cupcake_name"?
        "cupcake_name", "devoured"
    ], [
        // "name" or "cupcake_name"?
        req.body.name, req.body.devoured
    ], function() {
        res.redirect('/');
    });
});

// update
router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    cupcake.update({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});

// delete?
// router.delete("/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     cat.delete(condition, function() {
//         res.redirect('/');
//     });
// });

module.exports = router;