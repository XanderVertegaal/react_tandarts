import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default ({ day, time, dentist, assistant, patient }) => (
  <li className="appointment">
    <div className="time">{format_time(time)}</div>
    <div className="patient">Patiënt: {patient}</div>
    <div className="dentist">Tandarts: {dentist}</div>
    <div className="assistant">Assistent: {assistant.firstName ? assistant.firstName : 'no assistant'}</div>
  </li>
);
