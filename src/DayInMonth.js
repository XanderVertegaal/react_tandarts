import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

const DayInMonth = props => {

  const appointmentsJSX = props.appointments.map((appointment, index) => {
      if (props.sickPeople.patient.includes(appointment.patient.id) === false) {
          return ( <AppointmentInMonth time={appointment.time} patient={`${appointment.patient.firstName} ${appointment.patient.lastName}`} key={index} />)} else {
            return <AppointmentInMonth time={appointment.time} patient={`CANCELLED!`} key={index} />
          }
      });

  return <div className="day">{appointmentsJSX}</div>;

};

export default DayInMonth