var orm = require('../config/orm.js');

var cupcake = {
    allCupcakes: function(cb) {
        orm.selectAll('cupcakes', function(res) {
            cb(res);
        });
    },

    // the variables cols and vals are arrays
    createCupcake: function(cols, vals, cb) {
        orm.insertOne('cupcakes', cols, vals, function(res) {
            cb(res);
        });
    },
    updateCupcake: function(objColVals, condition, cb) {
        orm.updateOne('cupcakes', objColVals, condition, function(res) {
            cb(res);
        });
    }
    
};

module.exports = cupcake;