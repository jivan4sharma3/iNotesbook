import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'


const AddNotes = () => {
    const context = useContext(noteContext)
    const { addNotes } = context
    const [note, setNote] = useState({ tttle: "", description: "", tag: "default" })

    const handleClick = (e) => {
        e.preventDefault()
        addNotes(note.title, note.description, note.tag)
    }

    const handleONchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className="container my-3">
            <h2>Add Yours Notes</h2>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={handleONchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name='description' onChange={handleONchange} />
                </div>
                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Note Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' onChange={handleONchange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add a Note</button>
            </form>
        </div>
    )
}

export default AddNotes
