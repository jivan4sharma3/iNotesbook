import React from 'react'

const Notesitems = (props) => {
    const { note } = props
    return (
        <div className='col-md-3 '>
            <div className="card my-3" >
                    <div className="card-body">
                        <h5 className="card-title">{note.title} </h5>
                        <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quam aut dolorem maxime atque eligendi doloribus laboriosam veniam obcaecati excepturi molestiae asperiores dolorum harum quas omnis distinctio nisi sapiente. Natus sed dolore iste hic porro quas minima, optio perferendis consequuntur eaque, distinctio consequatur architecto explicabo ratione nemo cumque nisi eos?</p>
                    </div>
            </div>
        </div>
    )
}

export default Notesitems
