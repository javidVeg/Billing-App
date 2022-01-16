const connectDB = require('./startup/db')
const express = require('express');
const app = express();

const patientsInfo = require('./routes/patientInfo');


connectDB();

app.use(express.json());
app.use('/api/patientsInfo', patientsInfo)

const port = process.env.PORT || 5001;
    app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
