import apiUrl from '../apiConfig'
import axios from 'axios'

export const allWhiskey = user => {
  return axios({
    url: apiUrl + '/whiskeys',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
