class AppointmentFactory{

    Build(simpleAppointment){

        var month = simpleAppointment.date.getMonth();
        var year = simpleAppointment.date.getFullYear();
        var day = simpleAppointment.date.getDate() + 1;
        
        var hours = Number.parseInt(simpleAppointment.time.split(':')[0]); 
        var minutes = Number.parseInt(simpleAppointment.time.split(':')[1]); 

        var startDate = new Date(year, month, day, hours, minutes, 0, 0);
        
        var appo = {
            id: simpleAppointment._id,
            title: `${simpleAppointment.name} - ${simpleAppointment.description}`,
            start: startDate,
            end: startDate
        }

        return appo;
    }
}

module.exports = new AppointmentFactory();