var mongoose = require(mongoose);

var Document = mongoose.model('document',{
    documentId:{type:String},
    type:{type:String},
    source:{type:String},
    date:{type:String},
    tripId:{type:String},
    status:{type:String},
    notes:{type:String},
});
module.exports = Document;