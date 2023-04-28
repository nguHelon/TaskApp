import React from 'react'
import { avatar, avatar1, avatar2, avatar3, reward, target } from '../assets/assets'

const UserBody = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto flex items-center justify-between mb-3">
        <div className="h-12 w-12 rounded-full relative">
          <img className="w-full h-full rounded-full" src={avatar} alt="" />
          <span className="w-3 h-3 rounded-full absolute right-0 bottom-0 bg-green-500"></span>
        </div>
        <button className="buttonGradient1">Log Out</button>
      </div>
      <div className="w-full h-auto flex justify-between items-start">
        <div className="h-auto w-4/6">
          <div className="w-full py-5 text-left mb-4">
            <h1 className="text-3xl text-textColor2 font-bold">Hello Ngu Helon</h1>
            <p className="text-textColor">Hope you are having a good day, let's see the tasks you have today. 🙂 </p>
          </div>
          <div className="w-full h-auto p-4 rounded-2xl bg-white containerBoxShadow">
            <div className="w-full h-auto pt-5 flex justify-between items-center space-x-12">
              
              <div className="w-full flex-1 mr-3">
                <h1 className="text-xl font-bold text-textColor2">12</h1>
                <span className="text-textColor">In progress</span>
              </div>
              
              <div className="h-[50px] w-[1px] bg-textColor"></div>
                
              <div className="w-full flex-1 mr-3">
                <h1 className="text-xl font-bold text-textColor2">34</h1>
                <span className="text-textColor">Completed</span>
              </div>
              
              <div className="h-[50px] w-[1px] bg-textColor"></div>
                
              <div className="w-full flex-1 mr-3">
                <h1 className="text-xl font-bold text-textColor2">02</h1>
                <span className="text-textColor">On Hold</span>
              </div>
              
              <div className="h-[50px] w-[1px] bg-textColor"></div>
                
              <div className="w-full flex-1">
                <h1 className="text-xl font-bold text-textColor2">40</h1>
                <span className="text-textColor">Total Tasks</span>
              </div>
                            
            </div>

            <div className="w-full py-4 pt-7">
              <h1 className="text-textColor2 font-bold text-2xl mb-7">Motivation</h1>
              <div className="w-full h-auto flex justify-between space-x-3">

                <div className="flex-1 rounded-2xl border border-[#c8cbd6] flex justify-between items-center p-2 space-x-2">
                  <img className="h-[50px] w-[50px]" src={target} alt="" />
                  <div>
                    <h1 className="text-textColor2 font-bold">Focus On Your Target</h1>
                    <p className="text-textColor">Lorem ipsum dolor, sit amet consectetur</p>
                  </div>
                </div>

                <div className="flex-1 rounded-2xl border border-[#c8cbd6] flex justify-between items-center p-2 space-x-2">
                  <img className="h-[50px] w-[50px]" src={reward} alt="" />
                  <div>
                    <h1 className="text-textColor2 font-bold">Get rewarded for hard work</h1>
                    <p className="text-textColor">Lorem ipsum dolor, sit amet consectetur</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="w-full py-4">
              <h1 className="text-textColor2 font-bold text-2xl mb-7">Your Tasks</h1>
              <div className="w-full h-auto flex items-center space-x-3 space-y-3 flex-wrap">            

                <div className="w-[48%] rounded-2xl border border-[#c8cbd6] flex justify-between items-center p-2 ml-3 mt-3 space-x-2">                  
                  <div>
                    <h1 className="text-textColor2 font-bold">Get rewarded for hard work</h1>
                    <p className="text-textColor">Lorem ipsum dolor, sit amet consectetur</p>
                  </div>
                </div>

                <div className="w-[48%] rounded-2xl border border-[#c8cbd6] flex justify-between items-center p-2 space-x-2">                  
                  <div>
                    <h1 className="text-textColor2 font-bold">Get rewarded for hard work</h1>
                    <p className="text-textColor">Lorem ipsum dolor, sit amet consectetur</p>
                  </div>
                </div>

                <div className="w-[48%] rounded-2xl border border-[#c8cbd6] flex justify-between items-center p-2 space-x-2">                  
                  <div>
                    <h1 className="text-textColor2 font-bold">Get rewarded for hard work</h1>
                    <p className="text-textColor">Lorem ipsum dolor, sit amet consectetur</p>
                  </div>
                </div>

                <div className="w-[48%] rounded-2xl border border-[#c8cbd6] flex justify-between items-center p-2 space-x-2">                  
                  <div>
                    <h1 className="text-textColor2 font-bold">Get rewarded for hard work</h1>
                    <p className="text-textColor">Lorem ipsum dolor, sit amet consectetur</p>
                  </div>
                </div>

              </div>
            </div>

          </div>    
        </div>

        <div className="w-[32%] bg-white rounded-2xl p-3 containerBoxShadow">
          <h1 className="text-2xl text-textColor2 font-bold mb-8">Meetings Schedule</h1>
          <div className="w-full h-auto flex flex-col space-y-3">
            <div className="w-full rounded-2xl p-5 bg-[#fff1d6]">
              <span className="text-textColor mb-4">Mon, Apr 1 2023</span>
              <p className="Capitalize text-textColor2 font-bold mb-5">Colleague Reunion</p>
              <div className="w-full flex justify-around items-start">
                <img className="h-[50px] w-[50px] rounded-full" src={avatar} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar1} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar3} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar2} alt="" />
              </div>
            </div>
            <div className="w-full rounded-2xl p-5 bg-[#d1e7ff]">
              <span className="text-textColor mb-4">Mon, Apr 1 2023</span>
              <p className="Capitalize text-textColor2 font-bold mb-5">Colleague Reunion</p>
              <div className="w-full flex justify-around items-start">
                <img className="h-[50px] w-[50px] rounded-full" src={avatar} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar1} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar3} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar2} alt="" />
              </div>
            </div>
            <div className="w-full rounded-2xl p-5 bg-[#ffd8da]">
              <span className="text-textColor mb-4">Mon, Apr 1 2023</span>
              <p className="Capitalize text-textColor2 font-bold mb-5">Colleague Reunion</p>
              <div className="w-full flex justify-around items-start">
                <img className="h-[50px] w-[50px] rounded-full" src={avatar} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar1} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar3} alt="" />
                <img className="h-[50px] w-[50px] rounded-full" src={avatar2} alt="" />
              </div>
            </div>
            <div className="w-full rounded-2xl p-5 bg-[#d9ffe5]">
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
    </div>
  )
}

export default UserBody