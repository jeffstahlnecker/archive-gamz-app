import * as React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import env from './env'

const firebaseConfig = {
  apiKey: env.APIKEY,
  authDomain: env.AUTHDOMAIN,
  databaseURL: env.DATABASEURL,
  projectId: env.PROJECTID,
  storageBucket: env.STORAGEBUCKET,
  messagingSenderId: env.MESSAGINGSENDERID,
  appId: env.APPID,
  measurementId: env.MEASUREMENTID,
}
console.log(env.APIKEY)

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
    const user = firebase.auth().currentUser!
    return {
      initializing: !user,
      user,
    }
  })

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
