/* eslint-disable no-unused-vars */
import './App.css'
import axios from 'axios'
import {UserContextProvider } from './UserContext'
import Routes from './Routes'

function App() {
  // axios.defaults.baseURL='https://chat-app-backend-fawn-psi.vercel.app/'
  axios.defaults.baseURL = 'http://localhost:4000/';

  return (
    <>
      <UserContextProvider>
        <Routes/>
      </UserContextProvider>
      
     
    </>
  )
}

export default App
