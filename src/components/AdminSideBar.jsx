import React from "react"
import { Outlet, Link } from "react-router-dom";
import { taskLogo } from "../assets/assets";
import { meetingsReducer } from './StateReducer';

const UserSideBar = () => {
    const [meetings, dispatch] = useReducer(meetingsReducer, []);

    useEffect(() => {
      const appData = localStorage.getItem("appData") == null ? {meetings: []} : JSON.parse(localStorage.getItem("appData"));
      dispatch({
          type: "setAllMeetings",
          meetings: appData.meetings
      })
    }, []);
  
    useEffect(() => {
      const prevValue = localStorage.getItem("appData") == null ? {meetings: []} : JSON.parse(localStorage.getItem("appData"));   
  
      if (meetings) {
          if (meetings.length > 0) {
            localStorage.setItem("appData", JSON.stringify({...prevValue, meetings: [...meetings]}));
          }
      } else {
          return;
      }
      
    }, [meetings]);

    return (
        <div className="w-full p-3 pl-[280px] flex justify-between items-start bg-[#edf1f4]">
            <div className="w-[250px] h-[97vh] p-3 rounded-2xl bg-white fixed left-3 top-3 containerBoxShadow">
                <img className="w-[100px] rounded-md mb-11" src={taskLogo} alt="" />
                <ul className="w-full flex flex-col space-y-7">
                    <Link to=".." relative="path">
                        <li className="flex items-center justify-start space-x-2">
                            <div className="h-[40px] w-[40px] rounded-full flex justify-center items-center text-[#e4936a] bg-[#f6ebe7]">
                                <i className="fa-solid fa-chess-board text-xl"></i>
                            </div>
                            <span className="text-textColor text-xl">Dashboard</span>
                        </li>
                    </Link>
                    <Link to="adminusers">
                        <li className="flex items-center justify-start space-x-2">
                            <div className="h-[40px] w-[40px] rounded-full flex justify-center items-center text-[#276221] bg-[#acda87]">                            
                                <i className="fa-solid fa-users text-xl"></i>
                            </div>
                            <span className="text-textColor text-xl">Users</span>
                        </li>
                    </Link>
                    <Link to="admintasks">
                        <li className="flex items-center justify-start space-x-2">
                            <div className="h-[40px] w-[40px] rounded-full flex justify-center items-center text-[#276221] bg-[#acda87]">
                                <i className="fa-solid fa-list-ul text-xl"></i>
                            </div>
                            <span className="text-textColor text-xl">Tasks</span>
                        </li>
                    </Link>
                    <Link to="adminmeetings">
                        <li className="flex items-center justify-start space-x-2">
                            <div className="h-[40px] w-[40px] rounded-full flex justify-center items-center">
                                <i className="fa-solid fa-video text-gray-700"></i>
                            </div>
                            <span className="text-textColor text-xl">Meetings</span>
                        </li>
                    </Link>
                </ul>
            </div>

                <Outlet context={[meetings, dispatch]}/>

        </div>
    )
}

export default UserSideBar;