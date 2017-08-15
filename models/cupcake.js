var orm = require('../config/orm.js');

var cupcake = {
    all: function(cb) {
        orm.all('cupcakes', function(res) {
            cb(res);
        });
    },

    // the variables cols and vals are arrays
    create: function(cols, vals, cb) {
        orm.create('cupcakes', cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update('cupcakes', objColVals, condition, function(res) {
            cb(res);
        });
    }
    // delete: function(condition, cb) {
    //     orm.delete('cupcakes', condition, function(res) {
    //         cb(res);
    //     });
    // }
};

module.exports = cupcake;