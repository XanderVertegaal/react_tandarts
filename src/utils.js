const getRandomPeople = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=56')
    if (!response.ok) {
      const errorMessage = `Data could not be retrieved: ${response.status}`
      throw new Error(errorMessage, response.statusText)
    }
    const randomPeopleData = await response.json();
    return randomPeopleData.results
  } catch (error) {
    console.log(error)
  }
}


const getDentists = (peopleData) => {
  const dentistList = peopleData.slice(0,4)

  let dentists = []
  let newId = 1
  for (let item of dentistList) {
    dentists.push({
      id: newId,
      firstName: item.name.first,
      lastName: item.name.last,
      phoneNumber: item.phone,
      emailAddress: `${item.name.first.toLowerCase()}.${item.name.last.toLowerCase()}@tandartsenpraktijkbvt.nl`
    })
    newId++
  }
  return dentists
}


const getAssistants = peopleData => {
  const assistantList = peopleData.slice(4,6)

  let assistants = []
  let newId = 1
  for (let item of assistantList) {
    assistants.push({
      id: newId,
      firstName: item.name.first,
      lastName: item.name.last,
      phoneNumber: item.phone,
      emailAddress: `${item.name.first.toLowerCase()}.${item.name.last.toLowerCase()}@tandartsenpraktijkbvt.nl`
    })
    newId++
  }
  return assistants
}


const getPatients = peopleData => {
  const patientList = peopleData.slice(6)

  let patients = []
  let newId = 1
  for (let item of patientList) {
    patients.push({
      id: newId,
      firstName: item.name.first,
      lastName: item.name.last,
      phoneNumber: item.phone,
      emailAddress: item.email,
      dob: item.dob.date.slice(0,4)
    })
    newId++
  }
  return patients
}


const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};


const getRandomName = people => {
  const randNum = Math.floor(Math.random() * people.length);
  return people[randNum]
}


const getRandomDay = () => Math.floor(Math.random() * 28) + 1;


const generateRandomAppointment = (dentists, assistants, patients) => ({
  day: getRandomDay(),
  time: getRandomTime(),
  dentist: getRandomName(dentists),
  assistant: (Math.random() >= .5 ? getRandomName(assistants) : 'no assistant'),
  patient: getRandomName(patients),
});

const isConflict = (appointment, appointments) =>  appointments.some(item => (
      item.id !== appointment.id &&
      item.time === appointment.time && 
      item.day === appointment.day &&
      (
        item.dentist === appointment.dentist || 
        item.assistant === appointment.assistant ||
        item.patient === appointment.patient
      )
    ))
  // false
//   )
// }

const getAppointments = (dentists, assistants, patients, num) => {
  let appointments = []
  let newId = 1
  while (appointments.length < num) {
    let newAppointment = generateRandomAppointment(dentists, assistants, patients)
    if (isConflict(newAppointment, appointments) === false) {
      newAppointment.id = newId
      appointments.push(newAppointment)
      newId++
    }
  }
  return appointments
}


const addDentist = (dentists, setDentists, firstName, lastName, phoneNumber, emailAddress) => {
    setDentists([
      ...dentists,
      {
        id: dentists.length + 1,
        firstName,
        lastName,
        phoneNumber,
        emailAddress
      }
    ])
}

const addPatient = (patients, setPatients, firstName, lastName, phoneNumber, emailAddress) => {
  setPatients([
    ...patients,
    {
      id: patients.length + 1,
      firstName,
      lastName,
      phoneNumber,
      emailAddress
    }
  ])
}

const isPatientSick = (sickPeople, appointment) => {
  return sickPeople.patient.includes(appointment.patient.id)
}

const isDentistSick = (sickPeople, appointment) => {
  return sickPeople.dentist.includes(appointment.dentist.id)
}

const isAssistantSick = (sickPeople, appointment) => {
  if (appointment.assistant !== 'no assistant' || appointment.assistant !== undefined) {
    return sickPeople.assistant.includes(appointment.assistant.id)
  } else {
    return false
  } 
}

export { 
  getDentists, 
  getAssistants, 
  getPatients, 
  getAppointments, 
  getRandomPeople, 
  addDentist, 
  addPatient,
  isDentistSick,
  isAssistantSick,
  isPatientSick,
  isConflict
}
