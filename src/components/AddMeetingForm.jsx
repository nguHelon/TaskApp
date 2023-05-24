import { React, useState, useEffect } from "react"
import { login1, login3 } from "../assets/assets";
import { useUserContext } from "./context&Reducer/AllContext";
import MeetingAttendants from "./MeetingAttendants";
import { useNavigate, useOutletContext } from "react-router-dom";
// import { useContextMeeting } from "./context&Reducer/MeetingContext";

// import { Link } from "react-router-dom";

const AddMeetingForm = () => {
    const reducerData = useUserContext();
    const reducerUsers = reducerData.allUsers.map((user) => {
        return {...user, selected: false}
    })
    const [attendants, setAttendants] = useState([]);
    const [meetingInfo, setMeetingInfo] = useState({name: "", description: "", date: "", attendants: []});
    const navigate = useNavigate();



    useEffect(() => {
        setAttendants(reducerUsers);
    }, [reducerData]);

    const [meetings, dispatch] = useOutletContext()

    // const meetingsReducerData = useContextMeeting();

    function handleAddMeeting() {
        dispatch({
            type: "addMeeting",
            meetingInfo: meetingInfo
        });
        navigate("../adminmeetings");
    }

    // console.log(meetings, dispatch); 

    return (
        <section className="w-full h-[100vh] flex justify-center items-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${login1})`}}>
            <div className="w-[1000px] flex items-center justify-end rounded-xl relative boxShadow2 bg-white">
                <img className="w-1/2 h-full rounded-l-xl absolute top-0 left-0" src={login3} alt="" />
                <div className="w-1/2 h-full p-5">
                    <div className="w-full px-[30px] pt-[15px] flex flex-col justify-center items-center text-center">
                        <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full mb-3 bg-[#c7ddb5]">
                            <i className="fa-solid fa-video"></i>
                        </div>
                        <h1 className="text-[22px] mb-2">Add New Meeting</h1>
                        <p className="text-dimGray mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsum?</p>
                        <div className="w-full">
                            <input 
                                className="w-full h-[30px] outline-none border border-dimGray mb-3 pl-3 py-5" type="text" placeholder="Meeting Name"
                                onChange={(e) => {
                                    setMeetingInfo((prevInfo) => {
                                        return {...prevInfo, name: e.target.value}
                                    })
                                }}
                            />
                            <input 
                                className="w-full h-[30px] outline-none border border-dimGray mb-3 pl-3 py-5" type="text" placeholder="Meeting description"
                                onChange={(e) => {
                                    setMeetingInfo((prevInfo) => {
                                        return {...prevInfo, description: e.target.value}
                                    })
                                }}
                            />
                            <input 
                                className="w-full h-[30px] outline-none border border-dimGray mb-3 pl-3 py-5" type="date" placeholder="Meeting description"
                                onChange={(e) => {
                                    setMeetingInfo((prevInfo) => {
                                        return {...prevInfo, date: e.target.value}
                                    })
                                }}
                            />
                            <div  className="w-full flex flex-wrap m-5 space-x-1">
                                {
                                    attendants.map((user) => {
                                        return <MeetingAttendants 
                                            key={user.id}
                                            id={user.id}
                                            image={user.image}
                                            name={user.name}
                                            selected={user.selected}
                                            attendants={attendants}
                                            setMeetingInfo={setMeetingInfo}
                                            setAttendants={setAttendants}
                                        />
                                    })
                                }
                            </div>
                            <button 
                                className="w-full h-auto outline-none border-none bg-[#4b6043] text-white font-bold p-2 rounded-3xl"
                                onClick={handleAddMeeting}
                            >
                                Add Meeting
                            </button>
                            <p className="text-black mt-8">Made with 💗 by Ngu Helon.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddMeetingForm;