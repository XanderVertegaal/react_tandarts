import React from "react";
import "./App.css";

const Home = (props) => {
    
    const dentistFrame = props.dentists.map(dentist => (
        <tr key={`dentist-${dentist.id}`}>
            <td>
                {dentist.firstName}
            </td>
            <td>
                {dentist.lastName}
            </td>
            <td>
                {dentist.phoneNumber}
            </td>
            <td>{dentist.emailAddress}
            </td>
        </tr>
    ))

    const assistantFrame = props.assistants.map(assistant => (
        <tr key={`assistant-${assistant.id}`}>
            <td>
                {assistant.firstName}
            </td>
            <td>
                {assistant.lastName}
            </td>
            <td>
                {assistant.phoneNumber}
            </td>
            <td>{assistant.emailAddress}
            </td>
        </tr>
    ))

    return (
    <>
    <article>
        <header>
            <h2 className="home-title">Welcome to our clinic!</h2>
            <p className="home-lead">Dentists currently on duty:</p>
        </header>
        <table className="peopleTable">
            <tbody>
                <tr>
                    <th>First name</th>
                    <th>Surname</th>
                    <th>Phone number</th>
                    <th>Email address</th>
                </tr>
                {dentistFrame}
            </tbody>
        </table>
    </article>

    <article>
    <header>
        <p>Assistants currently on duty:</p>
    </header>
    <table className="peopleTable">
        <tbody>
            <tr>
                <th>First name</th>
                <th>Surname</th>
                <th>Phone number</th>
                <th>Email address</th>
            </tr>
            {assistantFrame}
        </tbody>
    </table>
    </article>
    </>
    )
}

export default Home