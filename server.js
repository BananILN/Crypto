const express = require('express')
const app = express();

const port = 80;

app.use(express.static('Crypto/dist'))

app.listen(port, () => console.log("server has been started on 80 port..."));
