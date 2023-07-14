import { BASE_URL } from './constants'

export const getData = async () => {
  try {
    return await fetch(BASE_URL, {
      method: 'GET',
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      }}).then(res => console.log(res))
      .catch(error => console.log(error))
  }
  catch (e) {
    console.log(e)
  }
}