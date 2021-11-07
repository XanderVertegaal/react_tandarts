import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

const DayInMonth = props => {

  const appointmentsJSX = props.appointments.map((appointment, index) => {
    return ( <AppointmentInMonth appointment={appointment} key={index} sickPeople={props.sickPeople}/>)})

  return <div className="day">{appointmentsJSX}</div>;

};

export default DayInMonth