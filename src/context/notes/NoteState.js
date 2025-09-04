import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name": "jivan",
        "class": "34v"
    }
    const [state, setState] = useState(s1)
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "jagat ",
                "class": "32"
            })
        }, 1000);
    }
    return (
        <noteContext.Provider value={{state , update}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;