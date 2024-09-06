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

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
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
              <EditAppointment/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/appointments/new"
          element={
            <ProtectedRoute user={user}>
              <NewAppointment/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
