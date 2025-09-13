import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const host = 'http://localhost:5000'
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)


    //Get all Notes
    const getallNotes = async () => {
        //TODO : API Call 
        const responce = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Auth-Token': localStorage.getItem('token')
            }
        })
        const json = await responce.json()
        console.log(json)
        setNotes(json)
    }


    //Add a Notes
    const addNotes = async (title, description, tag) => {
        //TODO : API Call 
        const responce = await fetch(`${host}/api/notes/addnotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Auth-Token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })
        const note = await responce.json()
        setNotes(notes.concat(note))
    }

    // Delete a Notes
    const deleteNotes = async (id) => {
        //API Call here 
        const responce = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Auth-Token': localStorage.getItem('token')
            },
        })
        const json = await responce.json()
        console.log(json)

        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a Notes
    const editNotes = async (id, title, description, tag) => {
        // Fetch API / API call 
        const responce = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Auth-Token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })
        const json = responce.json()
        console.log(json)

        let newNotes = JSON.parse(JSON.stringify(notes))
        // Logic to edit a note to client side 
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title
                newNotes[index].description = description
                newNotes[index].tag = tag
                break;
            }
        }
        setNotes(newNotes)
    }

    return (
        <noteContext.Provider value={{ notes, addNotes, deleteNotes, editNotes, getallNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;