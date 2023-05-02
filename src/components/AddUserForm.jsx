import React from "react"
import { login4, login2 } from "../assets/assets";
// import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <section className="w-full h-[100vh] flex justify-center items-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${login4})`}}>
            <div className="w-[1000px] flex items-center justify-end rounded-xl relative boxShadow2 bg-white">
                <img className="w-1/2 h-full rounded-l-xl absolute top-0 left-0" src={login2} alt="" />
                <div className="w-1/2 h-full p-5">
                    <div className="w-full px-[30px] pt-[15px] flex flex-col justify-center items-center text-center">
                        <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full mb-3 bg-[#91BAD6]">
                          <i className="fa-solid fa-user"></i>
                        </div>
                        <h1 className="text-[22px] mb-2">Add New User</h1>
                        <p className="text-dimGray mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsum?</p>
                        <form className="w-full">
                            <input className="w-full h-[30px] outline-none border border-dimGray mb-3 pl-3 py-5" type="text" placeholder="User Name"/>
                            <input className="w-full h-[30px] outline-none border border-dimGray mb-3 pl-3 py-5" type="password" placeholder="password"/>
                            <button className="w-full h-auto outline-none border-none bg-[#1E3F66] text-white font-bold p-2 rounded-3xl">Add User</button>
                            <p className="text-black mt-8">Made with 💗 by Ngu Helon.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LogIn;