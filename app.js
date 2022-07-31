const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routerMain = require('./routers/mainRouter.js');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/',routerMain );

app.listen(3001, ()=>console.log('Server running...'+"http://localhost:3001"))