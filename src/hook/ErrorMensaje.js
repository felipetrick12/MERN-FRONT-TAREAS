import React from 'react'

export const ErrorMensaje = ({mensaje,clas }) => {
    return (
        <div>
            <p className={`alert ${clas} mt-3`}>{mensaje}</p>
        </div>
    )
}
