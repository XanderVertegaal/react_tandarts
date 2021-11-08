import React from "react";
import { isAssistantSick, isDentistSick, isPatientSick } from "./utils";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

const AppointmentInMonth = props => {
  let sickStyle = {}
  
  if (isPatientSick(props.sickPeople, props.appointment)) {
    return (
      <div className="appointment">
        <span className="time">{format_time(props.appointment.time)}</span>
        <span className="patient">CANCELLED!</span>
      </div>
    );
    } else if (isDentistSick(props.sickPeople, props.appointment)) {
    sickStyle = {backgroundColor: 'red'}
    } else if (isAssistantSick(props.sickPeople, props.appointment)) {
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
