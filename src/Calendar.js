import React from "react";
import "./Calendar.css";
import DayInMonth from "./DayInMonth";
import InputForm from "./InputForm";

const divideByDay = appointments => {
  const appointmentsByDay = {};
  appointments.forEach(appointment => {
    const day = appointment.day;
    if (!appointmentsByDay.hasOwnProperty(day)) {
      appointmentsByDay[day] = [];
    }
    appointmentsByDay[day].push(appointment);
  });

  for (let day in appointmentsByDay) {
    appointmentsByDay[day] = appointmentsByDay[day].sort((a,b) => a.time - b.time)
  }

  return appointmentsByDay;
};

const Calendar = (props) => {

  const appointmentsByDay = divideByDay(props.appointments);

  const daysInMonthJSX = Object.values(
    appointmentsByDay
  ).map((appointmentsInDay, index) => {
    return ( <DayInMonth appointments={appointmentsInDay} key={index} /> )
  }
  );

  return (
    <>
    <InputForm addDentist={props.addDentist} addPatient={props.addPatient}/>
    <div className="calendarview">
      <div className="header">
        <div>Maandag</div>
        <div>Dinsdag</div>
        <div>Woensdag</div>
        <div>Donderdag</div>
        <div>Vrijdag</div>
      </div>
      <div className="table">{daysInMonthJSX}</div>
    </div>
    </>
  );
};


export default Calendar 