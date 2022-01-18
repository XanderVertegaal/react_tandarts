import React from "react";
import '../styles/InputForm.css'
import AddPerson from "./AddPerson";
import PeopleOptions from "./PeopleOptions";
import AppointmentOptions from "./AppointmentOptions";

const InputForm = props => {
    return (
        <div className="form-wrapper">
            <form className="add-person">
                <fieldset>
                    <legend>Add a new dentist / new patient:</legend>
                    <input type="text" id="input-firstName" placeholder="first name"/>
                    <input type="text" id="input-lastName" placeholder="last name"/>
                    <input type="tel" id="input-phoneNumber" placeholder="phone number"/>
                    <input type="email" id="input-email" placeholder="email address"/>
                    <AddPerson buttonText={"Add new dentist"} addPerson={props.addDentist} />
                    <AddPerson buttonText={"Add new patient"} addPerson={props.addPatient} />
                </fieldset>
            </form>

            <form className="modify-appointment">
                <fieldset>
                    <legend>Modify / remove appointment</legend>
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
    

                    <select id="appointment-selector">
                        <option value="">-Please select an appointment-</option>
                        <AppointmentOptions appointments={props.appointments} />
                    </select>
                    <button
                        onClick={event => {
                            event.preventDefault()
                            props.removeAppointment(document.getElementById('appointment-selector').value)
                        }}
                    >Remove appointment</button>
                </fieldset>
            </form>

            <form className="new-appointment">
                <fieldset>
                    <legend>New appointment</legend>
                    <select id="patient-selector-new">
                        <option value="">-Please select a patient-</option>
                        <PeopleOptions people={props.patients}/>
                    </select>
                    <select id="dentist-selector-new">
                        <option>-Please select a dentist-</option>
                        <PeopleOptions people={props.dentists}/>
                    </select>
                    <select id="assistant-selector-new">
                        <option value="no assistant">-Please select an assistant-</option>
                        <PeopleOptions people={props.assistants}/>
                    </select>
                    <label htmlFor="input-day">Day (1-28):
                        <input type="number" id="input-day" min="1" max="28"/>
                    </label>
                    <label htmlFor="input-time">
                        Time (8-18): <input type="number" id="input-time" min="8" max="18"/>
                    </label>
                    <button
                        onClick={event => {
                            event.preventDefault()
                            props.addAppointment(
                                document.getElementById('input-day').value, 
                                document.getElementById('input-time').value,
                                document.getElementById('patient-selector-new').value,
                                document.getElementById('dentist-selector-new').value,
                                document.getElementById('assistant-selector-new').value
                            )
                        }}
                    >Add appointment</button>   
                </fieldset>
            </form>
            
            <form className="moveAppointment">
                <fieldset>
                    <legend>Move appointment:</legend>
                    <select id="appointment-selector-move">
                        <option value="">-Please select an appointment-</option>
                        <AppointmentOptions appointments={props.appointments} />
                    </select>
                    <label htmlFor="input-day-move">
                        Target day (1-28) <input type="number" id="input-day-move" min="1" max="28"/>
                    </label>
                    <label htmlFor="input-time-move">
                        Target time (8-18) <input type="number" id="input-time-move" min="8" max="18"/>
                    </label>
                    <button
                        onClick={event => {
                            event.preventDefault()
                            props.moveAppointment(
                                document.getElementById('appointment-selector-move').value,
                                document.getElementById('input-day-move').value,
                                document.getElementById('input-time-move').value
                            )
                        }}
                    >Move appointment</button>
                </fieldset>
            </form>
        </div>
    )
}

export default InputForm