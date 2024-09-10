import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/doctors`

async function index() {
  try {
    const res = await fetch(
      BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error);   
  }
}

async function show(doctorId) {
  try {
    const res = await fetch(`${BASE_URL}/${doctorId}`, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createReview(doctorId, reviewFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${doctorId}/reviews`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function updateReview(doctor, reviewFormData) {
  try {
    console.log('DOCTOR', doctor);
    const res = await fetch(`${BASE_URL}/${doctor}/reviews`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteReview = async (doctorId, reviewId) => {
  try {
    const res = await fetch(`${BASE_URL}/${doctorId}/reviews/${reviewId}`, {
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
  show,
  createReview,
  updateReview,
  deleteReview
}