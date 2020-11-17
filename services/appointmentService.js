const appointment = require('../models/Appointment');
const mongoose = require('mongoose');
const AppointmentFactory = require('../factories/AppointementFactory');

const Appointment = mongoose.model('Appointment', appointment);

class AppointmentService {

    async Create(name, email, description, cpf, date, time){
        try {
            const newAppointment = new Appointment({
                name,
                email,
                description,
                cpf,
                date,
                time,
                finished: false
            });

            await newAppointment.save();
            return true;

        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
    async GetAll(showFinished){
        if(showFinished){
            return await Appointment.find();
        } else {
            var appos = await Appointment.find({'finished': false});
            var appointments = [];
            
            appos.forEach(appointment => {
                if(appointment.date != undefined){
                    appointments.push( AppointmentFactory.Build(appointment) );
                }

            });

            return appointments;
        }
    }

}

module.exports = new AppointmentService();