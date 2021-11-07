import React, {useEffect, useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";
import Loading from "./Loading";

import { getAssistants, getDentists, getPatients, getAppointments, getRandomPeople, addDentist, addPatient } from "./utils";

const App = () => {

  let [dentists, setDentists] = useState('0')
  let [assistants, setAssistants] = useState('0')
  let [patients, setPatients] = useState('0')
  let [appointments, setAppointments] = useState('0')

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
  console.log('New dentist added:', dentists)
}

const addNewPatient = (firstName, lastName, phoneNumber, emailAddress) => {
  addPatient(patients, setPatients, firstName, lastName, phoneNumber, emailAddress)
  console.log('New patient added:', patients)
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
              {appointments === '0' || appointments.some(x => x.patient === '0') ?
              <Loading /> :
              <Calendar appointments={appointments} addDentist={addNewDentist} addPatient={addNewPatient}/>
              }
            </Route>
            <Route path="/day">
              {appointments === '0' || appointments.some(x => x.patient === '0') ?
              <Loading /> :
              <Day appointments={appointments.filter(app => app.day === 1)} />
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
