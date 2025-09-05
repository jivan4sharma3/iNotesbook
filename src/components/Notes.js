import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import Notesitems from './Notesitems'
import AddNotes from './AddNotes'

const Notes = () => {
    const context = useContext(noteContext)
    const { notes } = context
    return (
        <>
        <AddNotes/>
            <div className="row my-3">
                <h2> Yours Notes</h2>
                {notes.map((note) => {
                    return <Notesitems key={note._id} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes
