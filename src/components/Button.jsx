import React from "react"

const Button = ({name, pageLink}) => {
    return (
        <a href={pageLink}>
            <button>{name}</button>
        </a>
    )
}

export default Button