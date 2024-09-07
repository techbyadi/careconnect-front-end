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

  useEffect(() => {
    const fetchAllAppointments = async () => {
      const appointmentsData = await appointmentService.index()
      setAppointments(appointmentsData)
    }
    if (user) fetchAllAppointments()
  }, [user])
  const [doctors, setDoctors] = useState([])
  const [searchResults, setSearchResults] = useState([])


  useEffect(()=> {
    const fetchAllDoctors = async () => {
      const doctorsData = await doctorService.index()
      setDoctors(doctorsData)
    }
    fetchAllDoctors()
  }, [])

  const handleDoctorSearch = (formData) => {
    const filteredDoctorResults = doctors.filter(doctor => {
      const locationMatch = formData.location 
        ? doctor.location.toLowerCase().includes(formData.location.toLowerCase())
        : false
  
      const specializationMatch = formData.specialization 
        ? doctor.specialization.toLowerCase().includes(formData.specialization.toLowerCase())
        : false
  
      return locationMatch || specializationMatch
    })
    setSearchResults(filteredDoctorResults);
  }

  const handleAddAppointment = async (appointmentFormData) => {
    console.log(`This is app.jsx : ${appointmentFormData}`);
    
    const newAppointment = await appointmentService.create(appointmentFormData)
    
    setAppointments([newAppointment, ...appointments])
    navigate('/appointments')
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

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={

        <Landing 
        user={user} doctors={searchResults.length ? searchResults : doctors} 
        handleDoctorSearch = {handleDoctorSearch}
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
              <AppointmentList appointments={appointments}/>
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
          path='/appointments'
          element={
            <ProtectedRoute user={user} >
              <AppointmentList
                user={user} 
                handleDeleteAppointment={handleDeleteAppointment} 
              />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  )
}

export default App
