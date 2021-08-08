const express = require('express');
const cors = require('cors');
const app = express();
require('./config/authors.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./Routes/authors.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
