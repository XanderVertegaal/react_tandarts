import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";

export default ({ appointments }) => {
  const appointmentsJSX = appointments
  .sort((a, b) => a.time - b.time)
  .map(
    ({ time, patient, dentist, assistant }, index) => (
      <AppointmentInDay
        time={time}
        patient={patient.firstName}
        dentist={dentist.firstName}
        assistant={assistant = 'no assistant' ? assistant : assistant.firstName}
        key={index}
      />
    )
  );
  return <ul className="dayview">{appointmentsJSX}</ul>;
};
