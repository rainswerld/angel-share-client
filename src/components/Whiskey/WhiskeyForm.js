import React, { useState } from 'react'
import { createWhiskey } from '../../api/whiskey'

// Import form and copy what we have in Change Password for Study Buddy

const WhiskeyForm = props => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')

  const handleChange = event => {
    event.preventDefault()
    createWhiskey(notes, title, props.user)
      .then(() => history.push('/'))
  }

  return (
    <div>
      <form>
        <label>
          Whiskey Name:
          <input onChange={e => setTitle(e.target.value)} value={title} type="text" name="title" />
          Notes:
          <input onChange={e => setNotes(e.target.value)} value={notes} type="text" name="notes" />
        </label>
        <button onSubmit={handleChange} type="submit" value="Submit">Submit</button>
      </form>
    </div>
  )
}

export default WhiskeyForm
