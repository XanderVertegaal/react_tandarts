import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

const AppointmentInMonth = props => {
  let sickStyle = {}
  if (props.cancelled === true) {
    return (
      <div className="appointment">
        <span className="time">{format_time(props.appointment.time)}</span>
        <span className="patient">CANCELLED!</span>
      </div>
    );
    } else if (props.sickPeople.dentist.includes(props.appointment.dentist.id)) {
    console.log('Hit!', props.appointment, props.sickPeople)
    sickStyle = {backgroundColor: 'red'}
    } else if (props.sickPeople.assistant && props.sickPeople.assistant.includes(props.appointment.assistant.id) === true) {
      sickStyle = {backgroundColor: 'yellow'}
    }

  return (
    <div className="appointment" style={sickStyle}>
      <span className="time">{format_time(props.appointment.time)}</span>
      <span className="patient">{`${props.appointment.patient.firstName} ${props.appointment.patient.lastName}`}</span>
    </div>
  );
}

export default AppointmentInMonth 
