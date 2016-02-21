var Sample  = require('../model/Sample.js');

module.exports.getSample=function(req,res){
	Sample.find({})
              .exec(
                function(err,results){
            	    res.json(results);
                });
}
