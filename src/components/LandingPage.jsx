import React from "react";
import { listItems } from "../constants/constants";
import taskLogo from "../assets/assets"

const LandingPage = () => {
    return (
        <section className="container">
            <div className="page">
                <nav className="navbar">
                    <img src={taskLogo} />
                    <ul>
                        {
                            listItems.map((list, index) => {
                                if (listItems.lenght - 1 != index) {
                                    return (
                                        <a href={list.pageLink}>
                                            <li key={list.id} >{list.name}</li>
                                        </a>
                                    )
                                }
                            })
                        }
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default LandingPage;