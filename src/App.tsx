import React from 'react'
import './App.css'
import Login from './components/Login'
import { useAuth } from './utils/firebase'
import Gamz from './components/Gamz'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  const { initializing, user } = useAuth()

  if (initializing) {
    return <div>Loading..</div>
  }

  if (!user) {
    return (
      <div>
        <Login />
      </div>
    )
  }
  return <Gamz />
}

export default App
