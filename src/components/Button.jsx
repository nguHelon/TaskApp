import React from "react";
import { Link } from "react-router-dom";

const Button = ({name}) => {
    return (
        <Link to="/login">
            <button className="buttonGradient1 px-2 py-5 text-white font-bold uppercase">{name}</button>
        </Link>
    )
}

export default Button