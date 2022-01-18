import React from "react";

const PeopleOptions = props => props.people
    .sort((a,b) => {
        let x = a.lastName.toLowerCase()
        let y = b.lastName.toLowerCase()
        return x < y ? -1 : x > y ? 1 : 0
    })
    .map(x => <option key={x.firstName + x.lastName} value={x.id}>{`${x.firstName} ${x.lastName}`}</option>)

export default PeopleOptions