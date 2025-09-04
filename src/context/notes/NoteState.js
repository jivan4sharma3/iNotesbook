import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
    {
        "_id": "68b696deb6be7f9d4dd713e8",
        "user": "68b68b2d074e076f4cdca305",
        "title": "My Notes ",
        "description": "Please add proper notes in you iNotebook app",
        "tag": "personal",
        "timestamp": "2025-09-02T07:03:58.149Z",
        "__v": 0
    },
    {
        "_id": "68b7fb5bea103701d7757d53",
        "user": "68b68b2d074e076f4cdca305",
        "title": "My Notes and my note ",
        "description": "Please add proper notes in you iNotebook app",
        "tag": "personal",
        "timestamp": "2025-09-03T08:24:59.402Z",
        "__v": 0
    },
    {
        "_id": "68b7fce789cd9c40bbb35840",
        "user": "68b68b2d074e076f4cdca305",
        "title": "My Notes and my note 2",
        "description": "Please add proper notes in you iNotebook app",
        "tag": "personal",
        "timestamp": "2025-09-03T08:31:35.080Z",
        "__v": 0
    },
    {
        "_id": "68b7fceb89cd9c40bbb35842",
        "user": "68b68b2d074e076f4cdca305",
        "title": "My Notes and my note 3",
        "description": "Please add proper notes in you iNotebook app",
        "tag": "personal",
        "timestamp": "2025-09-03T08:31:39.308Z",
        "__v": 0
    },
      {
        "_id": "68b7fceb89cd9c40bbb35842",
        "user": "68b68b2d074e076f4cdca305",
        "title": "My Notes and my note 3",
        "description": "Please add proper notes in you iNotebook app",
        "tag": "personal",
        "timestamp": "2025-09-03T08:31:39.308Z",
        "__v": 0
    },
      {
        "_id": "68b7fceb89cd9c40bbb35842",
        "user": "68b68b2d074e076f4cdca305",
        "title": "My Notes and my note 3",
        "description": "Please add proper notes in you iNotebook app",
        "tag": "personal",
        "timestamp": "2025-09-03T08:31:39.308Z",
        "__v": 0
    },
      {
        "_id": "68b7fceb89cd9c40bbb35842",
        "user": "68b68b2d074e076f4cdca305",
        "title": "My Notes and my note 3",
        "description": "Please add proper notes in you iNotebook app",
        "tag": "personal",
        "timestamp": "2025-09-03T08:31:39.308Z",
        "__v": 0
    },
      {
        "_id": "68b7fceb89cd9c40bbb35842",
        "user": "68b68b2d074e076f4cdca305",
        "title": "My Notes and my note 3",
        "description": "Please add proper notes in you iNotebook app",
        "tag": "personal",
        "timestamp": "2025-09-03T08:31:39.308Z",
        "__v": 0
    },
]
    const [notes, setNotes] = useState(notesInitial)

    return (
        <noteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;