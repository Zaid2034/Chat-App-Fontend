/* eslint-disable no-unused-vars */
import './App.css'
import axios from 'axios'
import {UserContextProvider } from './UserContext'
import Routes from './Routes'

function App() {
  axios.defaults.baseURL='https://chat-app-backend-fawn-psi.vercel.app/'
  return (
    <>
      <UserContextProvider>
        <Routes/>
      </UserContextProvider>
      
     
    </>
  )
}

export default App
