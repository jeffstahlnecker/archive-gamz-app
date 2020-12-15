import React from 'react'
import firebase from 'firebase'
import { useAuth } from '../utils/firebase'

interface UserInfoProps {
  mobile: boolean
}

const UserInfo: React.FC<UserInfoProps> = ({ mobile }) => {
  const { user } = useAuth()

  return (
    <div
      className={
        mobile
          ? 'flex-shrink-0 flex bg-gray-700 p-4'
          : 'flex-shrink-0 flex bg-gray-700 p-4'
      }
    >
      <button
        type="button"
        onClick={() => firebase.auth().signOut()}
        className={
          mobile
            ? 'flex-shrink-0 group block'
            : 'flex-shrink-0 w-full group block'
        }
      >
        <div className="flex items-center">
          <div>
            <img
              className={
                mobile
                  ? 'inline-block h-10 w-10 rounded-full'
                  : 'inline-block h-9 w-9 rounded-full'
              }
              src={user.photoURL || ''}
              alt=""
            />
          </div>
          <div className="ml-3">
            <p
              className={
                mobile
                  ? 'text-base leading-6 font-medium text-white'
                  : 'text-sm leading-5 font-medium text-white'
              }
            >
              {user.displayName}
            </p>
            <p
              className={
                mobile
                  ? 'text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150'
                  : 'text-xs leading-4 font-medium text-gray-300 group-hover:text-gray-200 transition ease-in-out duration-150'
              }
            >
              Sign Out
            </p>
          </div>
        </div>
      </button>
    </div>
  )
}

export default UserInfo
