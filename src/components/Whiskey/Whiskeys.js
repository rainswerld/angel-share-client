import React, { useState, useEffect } from 'react'
import { allWhiskey } from '../../api/whiskey'

const Whiskey = props => {
  const [whiskeys, setWhiskeys] = useState([])

  useEffect(() => {
    allWhiskey(props.user)
      .then(res => setWhiskeys(res.data.whiskeys))
      .catch(console.error)
  }, [])

  const allWhiskeys = whiskeys.map(whiskey => (
    <div key={whiskey.id}>
      <h1>{whiskey.title}</h1>
      <p>{whiskey.notes}</p>
    </div>
  ))

  return (
    <h1>{allWhiskeys}</h1>
  )
}

export default Whiskey
