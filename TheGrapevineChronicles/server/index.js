const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors())

app.listen(8080, () => {
    console.log('server listening on port 8080')
})

app.get('/', (req, res) => {
    res.send('Hello from the server!')
})