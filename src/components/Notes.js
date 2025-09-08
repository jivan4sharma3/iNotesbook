import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Notesitems from './Notesitems'
import AddNotes from './AddNotes'

const Notes = () => {
    const context = useContext(noteContext)
    const { notes, getallNotes } = context;
    useEffect(() => {
        getallNotes()
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null)

    const [note, setNote] = useState({ etttle: "", edescription: "", etag: "" })

    const handleClick = (e) => {
        console.log("updating a Note" , note)
        e.preventDefault()
    }
    
    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({etitle : currentNote.title ,edescription : currentNote.description,etag : currentNote.tag})
    }

    const handleONchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNotes />

            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit a Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input value={note.etitle} type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" onChange={handleONchange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input value={note.edescription} type="text" className="form-control" id="edescription" name='edescription' onChange={handleONchange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Note Tag</label>
                                    <input value={note.etag} type="text" className="form-control" id="etag" name='etag' onChange={handleONchange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleClick} className="btn btn-primary">Update a Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2> Yours Notes</h2>
                {notes.map((note) => {
                    return <Notesitems key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes
