import React from "react";
import { listItems } from "../constants/constants";
import { taskLogo } from "../assets/assets";
import Button from "./Button";

const LandingPage = () => {
    return (
        <section className="container w-full h-auto">
            <div className="page">
                <nav className="navbar">
                    <img src={taskLogo} alt="" />
                    <ul>
                        {
                            listItems.map((list, index) => {
                                if (listItems.length - 1 != index) {
                                    return (
                                        <a key={list.id} href={list.pageLink}>
                                            <li>{list.name}</li>
                                        </a>
                                    )
                                } else {
                                    return (
                                        <Button 
                                            key={list.id}
                                            {...list}
                                        />
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