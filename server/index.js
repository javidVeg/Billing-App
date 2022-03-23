const connectDB = require('./startup/db')
const express = require('express');
const app = express();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const patientsInfo = require('./routes/patientInfo');
const users = require('./routes/patientInfo')
const auth = require('./routes/Auth')
const postRoutes = require('./routes/Post')
const {errorHandler} = require('./middleware/errorMiddleware')



connectDB();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/api/patientsInfo', patientsInfo)
app.use('/api/auth', auth)
app.use('/api/posts', postRoutes);

app.use(errorHandler)


const port = process.env.PORT || 5001;
    app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
