const express = require('express')
const mongoose = require('mongoose')
const app = express()
const { port, dbURI } = require('./config/environment')

mongoose.connect(dbURI)

// app.use(express.static(`${__dirname}/dist`))

// app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.js`))

app.listen(port, () => console.log(`app is listening on port ${port}`))