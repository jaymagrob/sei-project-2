const express = require('express')
const mongoose = require('mongoose')
const app = express()
const { port, dbURI } = require('./config/environment')


app.use(express.static(`${__dirname}/dist`))


app.use('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))


mongoose.connect(dbURI)

app.listen(port, () => console.log(`app is listening on port ${port}`))