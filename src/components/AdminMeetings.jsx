import React, { useContext } from 'react';
import { avatar, avatar1, avatar2, avatar3 } from '../assets/assets';
import { useUserContext } from './context&Reducer/AllContext';
import { useOutletContext } from 'react-router-dom';

const AdminMeetings = () => {
  const reducerData = useUserContext();
  const [meetings, dispatch] = useOutletContext();
  const colors = ['bg-[#fff1d6]', 'bg-[#d1e7ff]', 'bg-[#ffd8da]', 'bg-[#d9ffe5]'];

  function handleRemoveMeeting(meetingId) {
    dispatch({
      type: "removeMeeting",
      meetingId: meetingId
    })
  }

  return (
    <div className="w-full min-h-[100vh]">
        <div className="w-full flex items-start justify-center mb-10">
            <input className="w-10/12 h-10 rounded-[60px] pl-3 outline-none font-[600] text-textColor2 containerBoxShadow" type="text" placeholder="Search Tasks"/>
        </div>

        <div className="w-full py-5 text-left mb-4">
            <h1 className="text-3xl text-textColor2 font-bold">All meetings</h1>
            <p className="text-textColor">You can see all the meetings below that have been planned with their descriptions. 🙂 </p>
        </div>

        <div className="w-full bg-white rounded-2xl p-3 containerBoxShadow">
          <h1 className="text-2xl text-textColor2 font-bold mb-8">Meetings Schedule</h1>
          <div className="w-full h-auto flex space-y-3 space-x-3 flex-wrap">            
            {
              meetings.map((meeting) => {
                let random = Math.floor(Math.random() * 3);
                return (
                  <div key={meeting.id} className={`w-[48%] rounded-2xl p-5 ml-3 mt-3 ${colors[random]}`}>
                    <span className="text-textColor mb-4">{meeting.date}</span>
                    <p className="Capitalize text-textColor2 font-bold mb-5">{meeting.description}</p>
                    <div className="w-full flex justify-around items-start">                      
                      {
                        
                        meeting.attendants.map((attendant) => {
                            return reducerData.allUsers.map((user) => {
                              if (attendant == user.id) {
                                return (
                                  <img key={user.id} className="h-[50px] w-[50px] rounded-full" src={`../src/assets/avatars/${user.image}`} alt="" />
                                )
                              }
                            })
                        })
                      }
                    </div>
                    <button 
                      className="py-1 px-3 mt-5 text-md font-bold text-white rounded-md bg-textColor2"
                      onClick={() => {
                        handleRemoveMeeting(meeting.id)
                      }}
                    >
                      cancel meeting
                    </button>
                  </div>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default AdminMeetings;