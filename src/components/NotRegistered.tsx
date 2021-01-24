import * as React from 'react'
import firebase from 'firebase/app'

const NotRegistered: React.FC = () => {
  return (
    <div>
      Thank you for your interest in our program. At the moment we are not
      allowing access to external parties.
      <div>
        <button type="button" onClick={() => firebase.auth().signOut()}>
          Return to Home
        </button>
      </div>
    </div>
  )
}

export default NotRegistered
