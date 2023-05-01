import React from 'react'

const AdminTasks = () => {
  return (
    <div className="w-full min-h-[100vh]">
        <div className="w-full flex items-start justify-center mb-10">
            <input className="w-10/12 h-10 rounded-[60px] pl-3 outline-none font-[600] text-textColor2 containerBoxShadow" type="text" placeholder="Search Tasks"/>
        </div>

        <div className="w-full py-5 text-left mb-4">
            <h1 className="text-3xl text-textColor2 font-bold">All meetings</h1>
            <p className="text-textColor">You can see all the meetings below that have been planned with their descriptions. 🙂 </p>
        </div>

        <div className="max-w-full h-auto py-5 rounded-2xl bg-white flex items-center space-x-3 space-y-3 flex-wrap containerBoxShadow">            

            <div className="w-[48%] rounded-2xl border border-[#c8cbd6] flex justify-between items-center p-2 ml-3 mt-3 space-x-2">                  
                <div>
                    <h1 className="text-textColor2 font-bold">Get rewarded for hard work</h1>
                    <p className="text-textColor mb-4">Lorem ipsum dolor, sit amet consectetur</p>
                    <div className="w-full flex items-start justify-start space-x-1">
                        <button className="py-1 px-2 rounded-[60px] outline-none border-none text-[14px] bg-[#ee6b6e] text-white font-bold">remove tasks</button>                        
                    </div>
                </div>
            </div>

            <div className="w-[48%] rounded-2xl border border-[#c8cbd6] flex justify-between items-center p-2 ml-3 mt-3 space-x-2">                  
                <div>
                    <h1 className="text-textColor2 font-bold">Get rewarded for hard work</h1>
                    <p className="text-textColor mb-4">Lorem ipsum dolor, sit amet consectetur</p>
                    <div className="w-full flex items-start justify-start space-x-1">
                        <button className="py-1 px-2 rounded-[60px] outline-none border-none text-[14px] bg-[#ee6b6e] text-white font-bold">remove tasks</button>                        
                    </div>
                </div>
            </div>

            <div className="w-[48%] rounded-2xl border border-[#c8cbd6] flex justify-between items-center p-2 ml-3 mt-3 space-x-2">                  
                <div>
                    <h1 className="text-textColor2 font-bold">Get rewarded for hard work</h1>
                    <p className="text-textColor mb-4">Lorem ipsum dolor, sit amet consectetur</p>
                    <div className="w-full flex items-start justify-start space-x-1">
                        <button className="py-1 px-2 rounded-[60px] outline-none border-none text-[14px] bg-[#ee6b6e] text-white font-bold">remove tasks</button>                        
                    </div>
                </div>
            </div>

            <div className="w-[48%] rounded-2xl border border-[#c8cbd6] flex justify-between items-center p-2 ml-3 mt-3 space-x-2">                  
                <div>
                    <h1 className="text-textColor2 font-bold">Get rewarded for hard work</h1>
                    <p className="text-textColor mb-4">Lorem ipsum dolor, sit amet consectetur</p>
                    <div className="w-full flex items-start justify-start space-x-1">
                        <button className="py-1 px-2 rounded-[60px] outline-none border-none text-[14px] bg-[#ee6b6e] text-white font-bold">remove tasks</button>                        
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default AdminTasks;