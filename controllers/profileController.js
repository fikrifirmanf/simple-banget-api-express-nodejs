const ProfileModel = require('../models/profileModel')

module.exports = {
    getAll: async function (req, res) {
        try {
            const response = await ProfileModel.find()
            res.json({data: response})
        } catch (error) {
            console.log(error)
            res.status(500).json({message: `Error: ${error}`})
        }
    },
    create: async function (req, res) {
        const profile = new ProfileModel({
            name: req.body.name,
            address: req.body.address
        })
        try {
            const response = await profile.save()
            res.json({data: response})
        } catch (error) {
            console.log(error)
            res.status(400).json({message: `Error: ${error}`})
        }
    },
    update: async function (req, res) {
        const id = req.params.id
        const profile = {
            name: req.body.name,
            address: req.body.address
        }
        try {
            await ProfileModel.findByIdAndUpdate(id, profile)
            res.json({message: 'Profile updated successfully'})
        } catch (error) {
            console.log(error)
            res.status(400).json({message: `Error: ${error}`})
        }
    },
    delete: async function (req, res) {
        const id = req.params.id
        try {
            await ProfileModel.findByIdAndDelete(id)
            res.json({message: 'Profile deleted successfully'})
        } catch (error) {
            console.log(error)
            res.status(400).json({message: `Error: ${error}`})
        }
    }
}