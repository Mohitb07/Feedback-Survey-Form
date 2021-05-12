const moongose = require('mongoose')
const { Schema } = moongose;

const recipientSchema = Schema({
    email : String,
    responded : {type:Boolean, default: false}
})

module.exports = recipientSchema;