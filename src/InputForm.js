import React from "react";
import AddPerson from "./AddPerson";

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
                {/* <DentistOptions/>*/}
            </select>
            <button>Dentist is sick</button>
            <br/>
            <select id="patient-selector">
                {/* <PatientOptions/>*/}
            </select>
            <button>Patient is sick</button>
            <select>
                {/* {AppointmentOptions} */}
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