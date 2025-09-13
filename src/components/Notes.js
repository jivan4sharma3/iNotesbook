import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Notesitems from './Notesitems'
import AddNotes from './AddNotes'
import { useNavigate } from 'react-router-dom'

const Notes = (props) => {
    const context = useContext(noteContext)
    let navigate = useNavigate();
    const { notes, getallNotes, editNotes } = context;
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        } else {
            getallNotes();
        }
        // eslint-disable-next-line
    }, []);
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });


    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({
            id: currentNote._id,
            etitle: currentNote.title,
            edescription: currentNote.description,
            etag: currentNote.tag
        });
    }

    const handleClick = (e) => {
        editNotes(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click()
    }
    const handleONchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNotes  />

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
                                    <input value={note.etitle} type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" onChange={handleONchange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input value={note.edescription} type="text" className="form-control" id="edescription" name='edescription' onChange={handleONchange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Note Tag</label>
                                    <input value={note.etag} type="text" className="form-control" id="etag" name='etag' onChange={handleONchange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" onClick={handleClick} className="btn btn-primary" > Update a Note </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2> Yours Notes</h2>
                <div className='container my-3 mx-2'>
                    {notes.length === 0 && "No notes to display"}
                </div>
                {notes.map((note) => {
                    return <Notesitems key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes
