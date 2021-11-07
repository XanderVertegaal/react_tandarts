import React from "react";
import AddPerson from "./AddPerson";
import PeopleOptions from "./PeopleOptions";
import AppointmentOptions from "./AppointmentOptions";

const InputForm = props => {
    return (
        <form>
            <input type="text" id="input-firstName" placeholder="first name"/>
            <input type="text" id="input-lastName" placeholder="last name"/>
            <input type="tel" id="input-phoneNumber" placeholder="phone number"/>
            <input type="email" id="input-email" placeholder="email address"/>
            <AddPerson buttonText={"Add new dentist"} addPerson={props.addDentist} />
            <AddPerson buttonText={"Add new patient"} addPerson={props.addPatient} />
            <br/>

            <select id="dentist-selector">
                <option>-Please select a dentist-</option>
                <PeopleOptions people={props.dentists}/>
            </select>
            <button 
                onClick={event => {
                    event.preventDefault()
                    props.makeSick('dentist', document.getElementById('dentist-selector').value)
                }}
            >Dentist is sick</button>
            <br/>

            <select id="assistant-selector">
                <option value="">-Please select an assistant-</option>
                <PeopleOptions people={props.assistants}/>
            </select>
            <button
                onClick={event => {
                    event.preventDefault()
                    props.makeSick('assistant', document.getElementById('assistant-selector').value)
                }}
                >Assistant is sick</button>
            <br/>

            <select id="patient-selector">
                <option value="">-Please select a patient-</option>
                <PeopleOptions people={props.patients}/>
            </select>
            <button
                onClick={event => {
                    event.preventDefault()
                    props.makeSick('patient', document.getElementById('patient-selector').value)
                }}
                >Patient is sick</button>
            <br/>

            <select id="appointment-selector">
                <option value="">-Please select an appointment-</option>
                <AppointmentOptions appointments={props.appointments} />
            </select>
            <button>Remove appointment</button>

            <input type="number" id="input-day"/>
            <input type="number" className="input-hour"/>
            <button>Add appointment</button>
            <button>Move appointment</button>
        </form>

    )
}

export default InputForm