import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";

export default props => {
  console.log('Day appointments:', props.appointments)
  const appointmentsJSX = props.appointments
    .sort((a, b) => a.time - b.time)
    .map(
      (appointment, index) => (
        <AppointmentInDay
          appointment={appointment}
          key={index}
          sickPeople={props.sickPeople}
        />
      )
    );
  return <ul className="dayview">{appointmentsJSX}</ul>;
};
