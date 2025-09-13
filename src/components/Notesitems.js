import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'


const Notesitems = (props) => {
    const context = useContext(noteContext)
    const { deleteNotes } = context
    const { note ,updateNote } = props
    return (
        <div className='col-md-3 '>
            <div className="card my-3" >
                <div className="card-body">
                    <h4 className="card-title">{note.title} </h4>
                    <p className="card-text fs-5">{note.description}</p>
                    <p className='fs-6'>Note Tag : {note.tag}</p>
                    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNotes(note._id);}}></i>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
                </div>
            </div>
        </div>
    )
}

export default Notesitems
