import React ,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import Notesitems from './Notesitems'

const Notes = () => {
    const context = useContext(noteContext)
    const { notes, setNotes } = context
    return (
        <div className="row my-3">
            <h2> Yours Notes</h2>
            {notes.map((note) => {
                return <Notesitems note={note}/>
            })}
        </div>
    )
}

export default Notes
