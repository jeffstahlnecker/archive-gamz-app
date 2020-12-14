import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import './App.css'
import Dashboard from './components/views/Dashboard'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  const location = useLocation()
  const [route, setRoute] = React.useState(location.pathname)

  function handleChange(newValue: string) {
    setRoute(newValue)
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
