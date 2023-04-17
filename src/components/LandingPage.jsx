import React from "react";
import { listItems } from "../constants/constants";
import { taskLogo, task1, task2 } from "../assets/assets";
import { Button } from "./components";

const LandingPage = () => {
    return (
        <section className="w-full h-auto">
            <div className="page w-full h-auto">
                <nav className="navbar w-full h-auto px-4 py-5 flex justify-between items-center ">
                    <img className="h-[50px] w-[140px] rounded-md" src={taskLogo} alt="" />
                    <ul className="basis-1/2 flex justify-end items-center space-x-8">
                        {
                            listItems.map((list, index) => {
                                if (listItems.length - 1 != index) {
                                    return (
                                        <a key={list.id} href={list.pageLink}>
                                            <li className="capitalize text-dimGray">{list.name}</li>
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
                <div className="w-full h-auto p-10">
                    <section>
                        <div className="w-full h-auto flex justify-between items-center mb-10">
                            <div className="basis-1/2 text-left">
                                <h1 className="text-black text-[50px] mb-4 font-bold">An online task management tool for teams</h1>
                                <p className=" mb-4 text-black text-[20px]">Quick tasks completion wherever you are & manage your teams with simple boards</p>
                                <div className=" w-full h-auto flex justify-start items-center space-x-4 ">
                                    <button className="buttonGradient2 ">Log In and start your tasks</button>
                                    <button className="btncss font-bold"><i className="fa-brands fa-github"></i>  Github</button>
                                </div>
                            </div>
                            <img className="basis-2/5 object-cover" src={task2} alt="" />
                        </div>
                        <div className="w-full flex justify-start">
                            <div className="w-auto h-auto flex items-center space-x-3">
                                <button className="w-9 h-9 rounded-[50%] outline-none text-white bg-violetBlue"><i className="fa-solid fa-play"></i></button>
                                <span className="font-bold">see how it works</span>
                            </div>
                        </div>
                    </section>
                    {/* <section>
                        <div className="w-full h-auto flex flex-row-reverse justify-between items-center mb-10">
                            <div className="basis-1/2 text-right">
                                <h1 className="text-black text-[50px] mb-4 font-bold">Manage your activity with TaskApp</h1>
                                <p className=" mb-4 text-black text-[20px]">Quick tasks completion wherever you are & manage your teams with simple boards</p>
                                <div className=" w-full h-auto flex justify-end items-center space-x-4 ">
                                    <button className="buttonGradient2 "><i className="fa-brands fa-google-play"></i> Google play</button>
                                    <button className="btncss font-bold"><i className="fa-brands fa-apple"></i>  apple</button>
                                </div>
                            </div>
                            <img className="h-[600px] w-[650px]" src={task1} alt="" />
                        </div>                        
                    </section> */}
                </div>
            </div>
        </section>
    )
}

export default LandingPage;