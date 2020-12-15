import * as React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

import dotenv from 'dotenv'

dotenv.config()

// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   databaseURL: process.env.DATABASEURL,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID,
//   measurementId: process.env.MEASUREMENTID,
// }

const firebaseConfig = {
  apiKey: 'AIzaSyAVbu-d3MncNUXeSrpcJJjHULE5CW185ac',
  authDomain: 'gamzapp-beb9e.firebaseapp.com',
  databaseURL: 'https://gamzapp-beb9e.firebaseio.com',
  projectId: 'gamzapp-beb9e',
  storageBucket: 'gamzapp-beb9e.appspot.com',
  messagingSenderId: '1032461449353',
  appId: '1:1032461449353:web:d99947e32657ff0af26e58',
  measurementId: 'G-05721XMBRD',
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
