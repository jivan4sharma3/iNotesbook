import { useState } from "react";
import noteContext from "./noteContext";
import { data } from "react-router-dom";

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
                'Auth-Token': ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhiNjhiMmQwNzRlMDc2ZjRjZGNhMzA1In0sImlhdCI6MTc1Njc5MzY0NX0.2_Ylo6VYW17SC3cmXFtglFREAS6KJ6mTbwDyJ2C-ls8'
            },
        })
        const json = await responce.json()
        console.log(json)
        setNotes(json)
    }


    //Add a Notes
    const addNotes = async (id, title, description, tag) => {
        //TODO : API Call 
        const responce = await fetch(`${host}/api/notes/addnotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Auth-Token': ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhiNjhiMmQwNzRlMDc2ZjRjZGNhMzA1In0sImlhdCI6MTc1Njc5MzY0NX0.2_Ylo6VYW17SC3cmXFtglFREAS6KJ6mTbwDyJ2C-ls8'
            },
            body: JSON.stringify({ title, description, tag })
        })

        console.log("Adding a Notes")
        const note = {
            "_id": "868b7fceb89cd9c40bbb35842",
            "user": "68b68b2d074e076f4cdca305",
            "title": title,
            "description": description,
            "tag": tag,
            "timestamp": "2025-09-03T08:31:39.308Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    // Delete a Notes
    const deleteNotes = (id) => {
        console.log("Deleting a note of id : " + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a Notes
    const editNotes = async (id, title, description, tag) => {
        // Fetch API / API call 
        const responce = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Auth-Token': ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhiNjhiMmQwNzRlMDc2ZjRjZGNhMzA1In0sImlhdCI6MTc1Njc5MzY0NX0.2_Ylo6VYW17SC3cmXFtglFREAS6KJ6mTbwDyJ2C-ls8'
            },
            body: JSON.stringify({ title, description, tag })
        })
        const json = responce.json()

        // Logic to edit a note to client side 
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title
                element.description = description
                element.tag = tag
            }

        }
    }

    return (
        <noteContext.Provider value={{ notes, addNotes, deleteNotes, editNotes, getallNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;