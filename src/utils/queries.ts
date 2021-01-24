import { useQuery } from 'react-query'
import { load } from 'ts-dotenv'

const env = load({
  SERVER_URL: String,
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useGetUser(email: string) {
  return useQuery(`user-${email}`, async () => {
    const response = await fetch(`${env.SERVER_URL}/api/users/${email}`, {
      method: 'GET',
    })
    const getData = await response.json()
    return getData
  })
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useGet(key: string, querySlug: string) {
  return useQuery(key, async () => {
    const response = await fetch(`${env.SERVER_URL}${querySlug}`, {
      method: 'GET',
    })
    const getData = await response.json()
    return getData
  })
}
