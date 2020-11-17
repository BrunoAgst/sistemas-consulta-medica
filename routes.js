const express = require('express');
const router = express.Router();
const appointmentService = require('./services/appointmentService');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/cadastro', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    var status = await appointmentService.Create(
        req.body.name,
        req.body.email,
        req.body.description,
        req.body.cpf,
        req.body.date,
        req.body.time
    );

    if(status){
        res.redirect('/');
    }else{
        res.send('Ocorreu um falha!');
    }

});

router.get('/getCalendar', async (req, res) => {
    var appointment = await appointmentService.GetAll(false);
    res.json(appointment);


});


module.exports = router;