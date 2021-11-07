import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

const AppointmentOptions = props => props.appointments
    .sort((a,b) => {
        let sortValue = 0
        if (a.day < b.day) {
            sortValue = -1
        } else if (a.day > b.day) {
            sortValue = 1
        } else {
            if (a.time < b.time) {
                sortValue = -1
            } else if (a.time > b.time) {
                sortValue = 1
            }
        }
        return sortValue
    })
    .map(x => <option key={x.time+x.day+x.dentist.id}>Dag {x.day} {format_time(x.time)} - {x.patient.firstName} {x.patient.lastName}</option>)

export default AppointmentOptions