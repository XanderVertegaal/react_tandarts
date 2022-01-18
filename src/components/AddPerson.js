import React from "react";

const AddPerson = props => {
    return (
        <>
            <button 
                onClick={(event) => {
                    event.preventDefault()
                    props.addPerson(
                    document.getElementById('input-firstName').value,
                    document.getElementById('input-lastName').value,
                    document.getElementById('input-phoneNumber').value,
                    document.getElementById('input-email').value
                )}}
            >
            {props.buttonText}</button>
        </>
    )
}

export default AddPerson