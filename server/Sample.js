var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Sample = new Schema({ sampleText: String}, { collection: 'SampleTable' })

module.exports = mongoose.model('Sample', Sample);
