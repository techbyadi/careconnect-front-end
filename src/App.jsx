// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import AppointmentList from './pages/AppointmentList/AppointmentList'
import NewAppointment from './pages/NewAppointment/NewAppointment'
import EditAppointment from './pages/EditAppointment/EditAppointment'
import ReviewsPage from './pages/Reviews/ReviewsPage'
import EditReview from './pages/EditReview/EditReview'


// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as appointmentService from './services/appointmentService'
import * as doctorService from './services/doctorService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [appointments, setAppointments] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchAllAppointments = async () => {
      const appointmentsData = await appointmentService.index()
      setAppointments(appointmentsData)
    }
    if (user) fetchAllAppointments()
  }, [user])


  const [doctors, setDoctors] = useState([])
  const [searchResults, setSearchResults] = useState([])


  useEffect(() => {
    const fetchAllDoctors = async () => {
      const doctorsData = await doctorService.index()
      setDoctors(doctorsData)
      setSearchResults(doctorsData)
    }
    fetchAllDoctors()
  }, [])

  const handleDoctorSearch = (formData) => {
    try {
      setMessage('')
    const filteredDoctorResults = doctors.filter(doctor => {
      const locationMatch = formData.location
        ? doctor.location.toLowerCase().includes(formData.location.toLowerCase())
        : true

        const searchQuery = formData.specialization ? formData.specialization.toLowerCase() : '';

      const specializationMatch = formData.specialization
        ? doctor.specialization.toLowerCase().includes(searchQuery)
        : true

      const nameMatch = formData.specialization
        ? doctor.name.toLowerCase().includes(searchQuery)
        : true

      const keywordsMatch = formData.specialization
        ? doctor.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery))
        : true;

        return locationMatch && (specializationMatch || nameMatch || keywordsMatch);
    })
    if (filteredDoctorResults.length === 0) {
      setMessage('No Doctor found for provided input');
    } else {
      setSearchResults(filteredDoctorResults)
      setMessage('')
    }
    } catch (error) {
      console.log(error)
      setMessage(error.message)
    }
  }

  const handleAddAppointment = async (appointmentFormData, doctor) => {
    const newAppointment = await appointmentService.create(appointmentFormData)
    setAppointments([newAppointment, ...appointments])
    navigate('/appointments', {state: doctor})
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const handleUpdateAppointment = async (appointmentFormData) => {
    const updatedAppointment = await appointmentService.update(appointmentFormData)
    setAppointments(appointments.map(appointment => appointment._id === updatedAppointment._id ? updatedAppointment : appointment))
    navigate('/appointments')
  }

  const handleDeleteAppointment = async (appointmentId) => {
    const deletedAppointment = await appointmentService.delete(appointmentId)
    setAppointments(appointments.filter(appointment => appointment._id !== deletedAppointment._id))
    navigate('/appointments')
  }

  const handleUpdateReview = async (reviewFormData) => {
    const updatedReview = await doctorService.updateReview(reviewFormData)
    setDoctors(doctors.map(review => review._id === updatedReview._id ? updatedReview : review))
    navigate('/appointments')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={
          <Landing
            user={user} doctors={searchResults.length ? searchResults : doctors}
            handleDoctorSearch={handleDoctorSearch}
            message = {message}
          />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/appointments"
          element={
            <ProtectedRoute user={user}>
              <AppointmentList appointments={appointments}
                user={user}
                handleDeleteAppointment={handleDeleteAppointment} />
            </ProtectedRoute>
          }
        />

        <Route
          path='/appointment/edit'
          element={
            <ProtectedRoute user={user} >
              <EditAppointment handleUpdateAppointment={handleUpdateAppointment} />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/appointments/new"
          element={
            <ProtectedRoute user={user}>
              <NewAppointment handleAddAppointment={handleAddAppointment} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/reviews'
          element={
            <ReviewsPage user={user}/>
          }
        />
      
      <Route
          path='/review/edit'
          element={
            <ProtectedRoute user={user} >
              <EditReview handleUpdateReview={handleUpdateReview} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
