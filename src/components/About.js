import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
  const a = useContext(noteContext)
  useEffect(() => {
    a.update()
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      This is about component {a.state.name} and he stydy in class {a.state.class}
    </div>
  )
}

export default About
