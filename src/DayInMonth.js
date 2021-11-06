import React from "react";
import AppointmentInMonth from "./AppointmentInMonth";

export default ({ appointments }) => {
  const appointmentsJSX = appointments.map(({ time, patient }, index) => (
    <AppointmentInMonth time={time} patient={`${patient.firstName} ${patient.lastName}`} key={index} />
  ));
  return <div className="day">{appointmentsJSX}</div>;
};
