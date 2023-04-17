import React from "react"

const Button = ({name, pageLink}) => {
    return (
        <a href={pageLink}>
            <button className="buttonGradient1 px-2 py-5 text-white font-bold uppercase">{name}</button>
        </a>
    )
}

export default Button