import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
    {
        "_id": "168b696deb6be7f9d4dd713e8",
        "user": "68b68b2d074e076f4cdca305",
        "title": "My Notes ",
        "description": "Please add proper notes in you iNotebook app",
        "tag": "personal",
        "timestamp": "2025-09-02T07:03:58.149Z",
        "__v": 0
    },
    {
        "_id": "268b7fb5bea103701d7757d53",
        "user": "68b68b2d074e076f4cdca305",
        "title": "My Notes and my note ",
        "description": "Please add proper notes in you iNotebook app",
        "tag": "personal",
        "timestamp": "2025-09-03T08:24:59.402Z",
        "__v": 0
    },
    {
        "_id": "368b7fce789cd9c40bbb35840",
        "user": "68b68b2d074e076f4cdca305",
        "title": "My Notes and my note 2",
        "description": "Please add proper notes in you iNotebook app",
        "tag": "personal",
        "timestamp": "2025-09-03T08:31:35.080Z",
        "__v": 0
    },
    {
        "_id": "468b7fceb89cd9c40bbb35842",
        "user": "68b68b2d074e076f4cdca305",
        "title": "My Notes and my note 3",
        "description": "Please add proper notes in you iNotebook app",
        "tag": "personal",
        "timestamp": "2025-09-03T08:31:39.308Z",
        "__v": 0
    },
      {
        "_id": "568b7fceb89cd9c40bbb35842",
        "user": "68b68b2d074e076f4cdca305",
        "title": "My Notes and my note 3",
        "description": "Please add proper notes in you iNotebook app",
        "tag": "personal",
        "timestamp": "2025-09-03T08:31:39.308Z",
        "__v": 0
    },
      {
        "_id": "668b7fceb89cd9c40bbb35842",
        "user": "68b68b2d074e076f4cdca305",
        "title": "My Notes and my note 3",
        "description": "Please add proper notes in you iNotebook app",
        "tag": "personal",
        "timestamp": "2025-09-03T08:31:39.308Z",
        "__v": 0
    },
      {
        "_id": "768b7fceb89cd9c40bbb35842",
        "user": "68b68b2d074e076f4cdca305",
        "title": "My Notes and my note 3",
        "description": "Please add proper notes in you iNotebook app",
        "tag": "personal",
        "timestamp": "2025-09-03T08:31:39.308Z",
        "__v": 0
    },
      {
        "_id": "868b7fceb89cd9c40bbb35842",
        "user": "68b68b2d074e076f4cdca305",
        "title": "My Notes and my note 3",
        "description": "Please add proper notes in you iNotebook app",
        "tag": "personal",
        "timestamp": "2025-09-03T08:31:39.308Z",
        "__v": 0
    },
]
    const [notes, setNotes] = useState(notesInitial)

    //Add a Notes
    const addNotes = (title,description,tag)=>{
        //TODO : API Call 
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
    const deleteNotes = (id)=>{
        console.log("Deleting a note of id : "+ id)
        const newNotes =notes.filter((note)=>{return note._id!== id})
        setNotes(newNotes)
    } 

    // Edit a Notes
    const editNotes = (id,title,description,tag)=>{

    } 


    return (
        <noteContext.Provider value={{notes,addNotes,deleteNotes,editNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;