const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personInfo = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    idNumber: String,
    allergies: String
},
{
    timestamps: true
});

module.exports = mongoose.model('personInfo', personInfo, 'personInfos');
