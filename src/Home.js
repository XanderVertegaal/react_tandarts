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
            <h2>Welkom in onze kliniek!</h2>
            <p>De volgende tandartsen hebben momenteel dienst:</p>
        </header>
        <table className="peopleTable">
            <tbody>
                <tr>
                    <th>Voornaam</th>
                    <th>Achternaam</th>
                    <th>Telefoonnummer</th>
                    <th>E-mailadres</th>
                </tr>
                {dentistFrame}
            </tbody>
        </table>
    </article>

    <article>
    <header>
        <p>De volgende assistenten hebben momenteel dienst:</p>
    </header>
    <table className="peopleTable">
        <tbody>
            <tr>
                <th>Voornaam</th>
                <th>Achternaam</th>
                <th>Telefoonnummer</th>
                <th>E-mailadres</th>
            </tr>
            {assistantFrame}
        </tbody>
    </table>
    </article>
    </>
    )
}

export default Home