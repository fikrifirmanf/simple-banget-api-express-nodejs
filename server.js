require('dotenv').config()
const express = require('express')
const app = express()
const ApiRoute = require('./routes/api')
const mongoose = require('mongoose')

const PORT = 3000

// MONGODB CONNECTION CONFIG
const dbUri = process.env.MONGODB_URI
mongoose.set('strictQuery', false)
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })

// MONGODB CONNECTION INIT
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

// BASE ROUTE
app.use('/api', ApiRoute)

app.listen(PORT, () => console.log(`running on port ${PORT}`))