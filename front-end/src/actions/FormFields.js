export const populateIncident = (formFields) => {
  return ({
    type: 'FORM_INCIDENT',
    payload: formFields
  });
}

export const initializeIncident = (formFields) => {
  return ({
    type: 'FORM_INCIDENT_INIT',
    payload: formFields
  });
}
