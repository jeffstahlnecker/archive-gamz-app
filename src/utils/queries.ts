// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getUser = () => {
  fetch('http://localhost:8080/api/users/jnh2dm@gmail.com', {
    method: 'GET',
    mode: 'no-cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => {
      return res.json()
    })
    .catch((res) => {
      console.log('Exception : ', res)
    })
}

export const dolphone = 'hello'
