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
        patient={`${patient.firstName} ${patient.lastName}`}
        dentist={`${dentist.firstName} ${dentist.lastName}`}
        assistant={assistant = 'no assistant' ? `no assistant` : `${assistant.firstName} ${assistant.lastName}`}
        key={index}
      />
    )
  );
  return <ul className="dayview">{appointmentsJSX}</ul>;
};
