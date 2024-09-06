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
    console.log(`This is appointmentservice.js : ${appointmentFormData}`)
    
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

export {
  index,
  create
}