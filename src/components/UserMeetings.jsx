import React from 'react'
import { avatar, avatar1, avatar2, avatar3 } from "../assets/assets"

const UserMeetings = () => {
  return (
    <div className="w-full min-h-[100vh]">

      <div>            
        <div className="w-full py-5 text-left mb-4">
          <h1 className="text-3xl text-textColor2 font-bold">Always share your thoughts</h1>
          <p className="text-textColor">Meetings are a great opportunity to share your thoughts and keep your team up to date. 🙂 </p>                
        </div>
      </div>

      <div className="w-full bg-white rounded-2xl p-3 containerBoxShadow">
          <h1 className="text-2xl text-textColor2 font-bold mb-8">Meetings Schedule</h1>
          <div className="w-full h-auto flex space-y-3 space-x-3 flex-wrap">
            <div className="w-[48%] rounded-2xl p-5 ml-3 mt-3 bg-[#fff1d6]">
              <span className="text-textColor mb-4">Mon, Apr 1 2023</span>
              <p className="Capitalize text-textColor2 font-bold mb-5">Colleague Reunion</p>
              <div className="w-full flex justify-around items-start">
                <img className="h-[50px] w-[50px] rounded-full" src={avatar} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar1} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar3} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar2} alt="" />
              </div>
            </div>
            <div className="w-[48%] rounded-2xl p-5 bg-[#d1e7ff]">
              <span className="text-textColor mb-4">Mon, Apr 1 2023</span>
              <p className="Capitalize text-textColor2 font-bold mb-5">Colleague Reunion</p>
              <div className="w-full flex justify-around items-start">
                <img className="h-[50px] w-[50px] rounded-full" src={avatar} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar1} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar3} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar2} alt="" />
              </div>
            </div>
            <div className="w-[48%] rounded-2xl p-5 bg-[#ffd8da]">
              <span className="text-textColor mb-4">Mon, Apr 1 2023</span>
              <p className="Capitalize text-textColor2 font-bold mb-5">Colleague Reunion</p>
              <div className="w-full flex justify-around items-start">
                <img className="h-[50px] w-[50px] rounded-full" src={avatar} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar1} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar3} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar2} alt="" />
              </div>
            </div>
            <div className="w-[48%] rounded-2xl p-5 bg-[#d9ffe5]">
              <span className="text-textColor mb-4">Mon, Apr 1 2023</span>
              <p className="Capitalize text-textColor2 font-bold mb-5">Colleague Reunion</p>
              <div className="w-full flex justify-around items-start">
                <img className="h-[50px] w-[50px] rounded-full" src={avatar} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar1} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar3} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar2} alt="" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserMeetings;