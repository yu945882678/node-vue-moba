const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    items: [{
        url: String,
        src: String
    }]
})

module.exports = mongoose.model('Ad', schema)