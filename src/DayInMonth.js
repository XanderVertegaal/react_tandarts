import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

const DayInMonth = props => {

  const appointmentsJSX = props.appointments.map((appointment, index) => {
      if (props.sickPeople.patient.includes(appointment.patient.id) === false) {
          return ( <AppointmentInMonth appointment={appointment} key={index} sickPeople={props.sickPeople} cancelled={false}/>)} else {
            return <AppointmentInMonth appointment={appointment} key={index} sickPeople={props.sickPeople} cancelled={true}/>
          }
      });

  return <div className="day">{appointmentsJSX}</div>;

};

export default DayInMonth