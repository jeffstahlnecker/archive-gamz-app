import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import Sidebar from './components/Sidebar'
import './App.css'
import Dashboard from './components/views/Dashboard'
import Login from './components/Login'
import { useAuth } from './utils/firebase'
import { getUser } from './utils/queries'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  const location = useLocation()
  const [route, setRoute] = React.useState(location.pathname)

  function handleChange(newValue: string) {
    setRoute(newValue)
  }

  const { initializing, user } = useAuth()

  const dbUser = useQuery('user', getUser)
  console.log(dbUser)

  if (initializing) {
    return <div>Loading..</div>
  }
  if (!user) {
    return <Login />
  }
  return (
    <Sidebar view={route} setView={handleChange}>
      <Switch>
        <Route path="/" component={Dashboard} exact />
      </Switch>
    </Sidebar>
  )
}

export default App
