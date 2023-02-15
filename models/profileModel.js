const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    }
})

const ProfileModel = mongoose.model('Profile', profileSchema)
module.exports = ProfileModel