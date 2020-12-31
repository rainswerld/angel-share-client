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

export const createWhiskey = (title, notes, user) => {
  return axios({
    url: apiUrl + '/whiskeys',
    method: 'POST',
    header: {
      'Authorization': `Token token=${user.token}`
    },
    whiskey: {
      title: title,
      notes: notes
    }
  })
}
