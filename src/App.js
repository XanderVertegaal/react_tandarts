import React, {useEffect, useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";
import Loading from "./Loading";

import { getAssistants, getDentists, getPatients, getAppointments, getRandomPeople, addDentist, addPatient, isConflict } from "./utils";

const App = () => {

  let [dentists, setDentists] = useState('0')
  let [assistants, setAssistants] = useState('0')
  let [patients, setPatients] = useState('0')
  let [appointments, setAppointments] = useState('0')
  let [sickPeople, setSickPeople] = useState({dentist: [], assistant: [], patient: []})

useEffect(() => {
  getRandomPeople()
  .then(data => {
    const newDentists = getDentists(data)
    setDentists(newDentists)

    const newAssistants = getAssistants(data)
    setAssistants(newAssistants)

    const newPatients = getPatients(data)
    setPatients(newPatients)
}) 
}, [])

useEffect(() => {
  const newAppointments = getAppointments(dentists, assistants, patients, 150)
  setAppointments(newAppointments)
}, [dentists, assistants, patients])

const addNewDentist = (firstName, lastName, phoneNumber, emailAddress) => {
  addDentist(dentists, setDentists, firstName, lastName, phoneNumber, emailAddress)
}

const addNewPatient = (firstName, lastName, phoneNumber, emailAddress) => {
  addPatient(patients, setPatients, firstName, lastName, phoneNumber, emailAddress)
}

const addSickPerson = (type, id) => {
  let newSickPeople = {...sickPeople}
  !newSickPeople[type].includes(id) && newSickPeople[type].push(parseInt(id))
  setSickPeople(newSickPeople)
}

const removeAppointment = appointmentId => {
  let newAppointments = [...appointments]
  const foundIndex = newAppointments.indexOf(newAppointments.find(x => parseInt(x.id) === parseInt(appointmentId)))
  newAppointments.splice(foundIndex, 1)
  setAppointments(newAppointments)
}

const addAppointment = (day, time, patientId, dentistId, assistantId = 'no assistant') => {
  const patient = patients.find(x => x.id === parseInt(patientId))
  const dentist = dentists.find(x => x.id === parseInt(dentistId))
  let newAssistant = 'no assistant'
  if (assistantId !== 'no assistant') {
    newAssistant = assistants.find(x => x.id === parseInt(assistantId)) 
  }
  const newAppointment = {
    dentist, patient,
    assistant: newAssistant,
    day: parseInt(day),
    time: parseInt(time),
    id: (appointments.length + 1)
  }
  isConflict(newAppointment, appointments) === false && setAppointments([...appointments, newAppointment])
  isConflict(newAppointment, appointments) === true && console.log('Clash!')
}

const moveAppointment = (appointmentId, newDay, newTime) => {
  let newAppointment = appointments.find(x => x.id === parseInt(appointmentId))
  newAppointment.time = parseInt(newTime)
  newAppointment.day = parseInt(newDay)

  let newAppointments = [...appointments]
  if (isConflict(newAppointment, newAppointments) === true) {console.log('clash')}
  if (isConflict(newAppointment, newAppointments) === false) {
    const foundIndex = newAppointments.indexOf(newAppointments.find(x => parseInt(x.id) === parseInt(appointmentId)))
    newAppointments.splice(foundIndex, 1)
    newAppointments.push(newAppointment)
    setAppointments(newAppointments)
  } 
}

    return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link 
                to="/"
              >Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar view</Link>
            </li>
            <li>
              <Link to="/day">Day view</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/calendar">
              {appointments === '0' || 
              appointments.some(x => x.patient === '0') ?
              <Loading /> :
              <Calendar 
                appointments={appointments} 
                addDentist={addNewDentist} 
                addPatient={addNewPatient}
                dentists={dentists}
                assistants={assistants}
                patients={patients}
                sickPeople={sickPeople}
                makeSick={addSickPerson}
                addAppointment={addAppointment}
                moveAppointment={moveAppointment}
                removeAppointment={removeAppointment}
              />
              }
            </Route>
            <Route path="/day">
              {appointments === '0' || appointments.some(x => x.patient === '0') ?
              <Loading /> :
              <Day 
                appointments={appointments.filter(app => app.day === 1)} 
                sickPeople={sickPeople} />
              }
            </Route>
            <Route path="/">
              {[dentists, assistants, patients].some(x => x === '0') ?
              <Loading /> :
              <Home 
                dentists={dentists}
                assistants={assistants}
                patients={patients}
              />
            }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
);

  }
export default App;
