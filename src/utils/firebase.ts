import * as React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import endpoint from './endpoint.config'

const firebaseConfig = {
  apiKey: endpoint.apiKey,
  authDomain: endpoint.authDomain,
  databaseURL: endpoint.databaseUrl,
  projectId: endpoint.projectId,
  storageBucket: endpoint.storageBucket,
  messagingSenderId: endpoint.messagingSenderId,
  appId: endpoint.appId,
  measurementId: endpoint.measurementId,
}

firebase.initializeApp(firebaseConfig)

export const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
}

export const auth = firebase.auth()

// Authentication
const userContext = React.createContext({
  user: null,
})

export const useSession: React.FC = () => {
  const { user } = React.useContext(userContext)
  return user
}

export const useAuth: () => {
  initializing: boolean
  user: firebase.User
} = () => {
  const [state, setState] = React.useState(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const user = firebase.auth().currentUser!
    return {
      initializing: !user,
      user,
    }
  })
  /* eslint-disable @typescript-eslint/no-explicit-any */
  function onChange(user: any) {
    setState({ initializing: false, user })
  }

  React.useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange)

    // unsubscribe to the listener when unmounting
    return () => unsubscribe()
  }, [])

  return state
}
