const express = require('express');
const log = require('morgan');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const indexRoutes = require('./routes/index.js');

//Servidor
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('views egine', 'ejs');

//Conexión DB
mongoose.connect('mongodb+srv://Gabriela:NiWN*pR37fFsDSX@cluster0.vzhhhyd.mongodb.net/cs?retryWrites=true&w=majority')
.then(bd => console.log('db de conecto')).catch(err => console.log(err));

//Middleware
app.use(log('dev'));
app.use(bodyparser.urlencoded({exttended: false}));

//Rutas
app.use('/', indexRoutes);

app.listen(app.get('port'), () =>{
    console.log('Servidor funcionando en el puerto: ', app.get('port'))
});