import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/api';

export const fetchIncidents = () => {
  return ({
    type: 'FETCH_INCIDENTS',
    payload: axios.get(`${ROOT_URL}/incident`)
  });
}

export const createIncident = (incident) => {
  return ({
    type: 'CREATE_INCIDENTS',
    payload: axios.post(`${ROOT_URL}/incident`, incident)
  });
}

export const updateIncident = (incident, id) => {
  // console.log('incidentAction >>> incident=', incident);
  return ({
    type: 'UPDATE_INCIDENT',
    payload: axios.patch(`${ROOT_URL}/incident/${id}`, incident)
  });
}

export const deleteIncident = (incident) => {
  return ({
    type: 'DELETE_INCIDENT',
    payload: axios.delete(`${ROOT_URL}/incident/${incident.id}`, incident)
  });
}
