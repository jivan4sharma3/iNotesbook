import React from 'react'

const Alert = (props) => {
    return (
        <div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
               {props.massage}
            </div>
        </div>
    )
}

export default Alert
