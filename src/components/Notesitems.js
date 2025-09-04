import React from 'react'

const Notesitems = (props) => {
    const { note } = props
    return (
        <div className='col-md-3 '>
            <div className="card my-3" >
                    <div className="card-body">
                        <h5 className="card-title">{note.title} </h5>
                        <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quam aut dolorem maxime atque eligendi doloribus laboriosam </p>
                        <i className="fa-solid fa-trash mx-2"></i>
                        <i className="fa-solid fa-pen-to-square mx-2"></i>
                    </div>
            </div>
        </div>
    )
}

export default Notesitems
