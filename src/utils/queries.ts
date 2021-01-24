import { useQuery } from 'react-query'
import endpoint from './endpoint.config'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useGetUser(email: string) {
  return useQuery(`user-${email}`, async () => {
    const response = await fetch(`${endpoint.databaseUrl}/api/users/${email}`, {
      method: 'GET',
    })

    return response.json()
  })
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useGet(key: string, querySlug: string) {
  return useQuery(key, async () => {
    const response = await fetch(`${endpoint.serverUrl}/${querySlug}`, {
      method: 'GET',
    })
    return response.json()
  })
}
