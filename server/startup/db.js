const config = require('config')
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT|| 5001;
const app = express();

function connectDB() {
    mongoose.connect(
        config.get('CONNECTION_URL'),
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => {
        console.log(`${error} did not connect`)
        process.exit(1)
    });
}

  module.exports = connectDB;