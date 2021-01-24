import * as React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import Sidebar from './Sidebar'
import { useAuth } from '../utils/firebase'
import { useGet } from '../utils/queries'
import NotRegistered from './NotRegistered'

const Gamz: React.FC = () => {
  const location = useLocation()
  const [route, setRoute] = React.useState(location.pathname)
  const [inDb, setInDb] = React.useState(false)
  const { initializing, user } = useAuth()
  const userEmail = user?.email || ''
  const { isLoading, isError, data, error } = useGet(
    `user-${userEmail}`,
    `api/users/${userEmail}`,
  )
  if (isError) {
    throw error
  }

  function handleChange(newValue: string) {
    setRoute(newValue)
  }

  React.useEffect(() => {
    function handleEmailCheck() {
      if (data?.result[0] === undefined) {
        return
      }
      if (user?.email === data.result[0].email) {
        setInDb(true)
      }
    }
    handleEmailCheck()
  }, [user.email, data])

  if (initializing || isLoading) {
    return <div>Loading..</div>
  }

  if (!inDb) {
    return <NotRegistered />
  }

  return (
    <Sidebar view={route} setView={handleChange}>
      <Switch>
        <Route path="/" component={Dashboard} exact />
      </Switch>
    </Sidebar>
  )
}

export default Gamz
