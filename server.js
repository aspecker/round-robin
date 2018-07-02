// require dependancies
const express = require('express');
const bodyParser = require('body-parser');

// call express
const app = express();

//intialize body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// define static paths
app.use(express.static("client/build"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Server running on ${PORT}`))
