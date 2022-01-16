const config = require('config')
const express = require('express')
const mongoose = require('mongoose')
const app = express();

function connectDB() {
    mongoose.connect(
        config.get('CONNECTION_URL'),
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to DB...`))
    .catch((error) => {
        console.log(`${error} did not connect`)
        process.exit(1)
    });
}

  module.exports = connectDB;