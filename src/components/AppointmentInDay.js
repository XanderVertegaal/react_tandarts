import React from "react";
import { isAssistantSick, isDentistSick, isPatientSick } from "../utils";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

const AppointmentInDay = props => {

  let sickStyle = {}
  let patientText = `${props.appointment.patient.firstName} ${props.appointment.patient.lastName}`
  if (isPatientSick(props.sickPeople, props.appointment)) {
    patientText = "CANCELLED"
  } else if (isDentistSick(props.sickPeople, props.appointment)) {
    sickStyle = {backgroundColor: 'red'}
  } else if (isAssistantSick(props.sickPeople, props.appointment)) {
    sickStyle = {backgroundColor: 'yellow'}
  }
  
  return (
    <li className="appointment">
      <div className="time">
        {format_time(props.appointment.time)}
      </div>
      <div className="patient">
        Patiënt: {patientText}
      </div>
      <div className="dentist" style={sickStyle}>
        Tandarts: {`${props.appointment.dentist.firstName} ${props.appointment.dentist.lastName}`}
      </div>
      <div className="assistant" style={sickStyle}>
        Assistent: {props.appointment.assistant.firstName ? `${props.appointment.assistant.firstName} ${props.appointment.assistant.lastName}` : 'no assistant'}
      </div>
    </li>
  );
}

export default AppointmentInDay
