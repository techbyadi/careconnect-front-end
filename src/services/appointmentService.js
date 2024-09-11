import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/appointments`

async function index() {
  try {
    const res = await fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function create(appointmentFormData) {
  try {
    
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(appointmentFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
async function update(appointmentFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${appointmentFormData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(appointmentFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteAppointment(appointmentId) {
  try {
    const res = await fetch(`${BASE_URL}/${appointmentId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  create,
  update,
  deleteAppointment as delete,
}