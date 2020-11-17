const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const moongose = require('mongoose');

const router = require('./routes');

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.static('public'));
app.use(router);

app.set('view engine', 'ejs');

moongose.connect('mongodb://localhost:27017/agendamento',{useNewUrlParser: true, useUnifiedTopology: true});


app.listen(3000, () => {
    console.log('running port 3000');
});