import { React, useEffect, useState} from "react"
import { login5, login6 } from "../assets/assets";
import { useUserContext } from "./context&Reducer/AllContext";
import TaskAssignee from "./TaskAssignee";
import { useContextTask } from "./context&Reducer/TaskContext";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const AddTaskForm = () => {
    const reducerData = useUserContext();
    const reducerUsers = reducerData.allUsers.map((user) => {
        return {...user, selected: false}
    })
    const [assingnees, setAssignees] = useState([])
    const [taskInfo, setTaskInfo] = useState({name: "", description: "", assignee: ""});

    const tasksReducerData = useContextTask();
    const navigate = useNavigate();

    function handleAddTask() {
        tasksReducerData.dispatch({
            type: "addTask",
            taskInfo: taskInfo
        })
        // navigate("../admindashboard/admintasks");
    }

    useEffect(() => {
        setAssignees(reducerUsers);
    }, [reducerData]);

    return (
        <section className="w-full h-[100vh] flex justify-center items-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${login5})`}}>
            <div className="w-[1000px] flex items-center justify-end rounded-xl relative boxShadow2 bg-white">
                <img className="w-1/2 h-full rounded-l-xl absolute top-0 left-0" src={login6} alt="" />
                <div className="w-1/2 h-full p-5">
                    <div className="w-full px-[30px] pt-[15px] flex flex-col justify-center items-center text-center">
                        <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full mb-3 bg-[#f5c77e]">
                            <i className="fa-solid fa-briefcase"></i>
                        </div>
                        <h1 className="text-[22px] mb-2">Add New Task</h1>
                        <p className="text-dimGray mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsum?</p>                        
                        <div className="w-full">
                            <input 
                                className="w-full h-[30px] outline-none border border-dimGray mb-3 pl-3 py-5" type="text" placeholder="Task Name"
                                onChange={(e) => {
                                    setTaskInfo((prevInfo) => {
                                        return {...prevInfo, name: e.target.value}
                                    })
                                }}
                            />
                            <input 
                                className="w-full h-[30px] outline-none border border-dimGray mb-3 pl-3 py-5" type="text" placeholder="Task description"
                                onChange={(e) => {
                                    setTaskInfo((prevInfo) => {
                                        return {...prevInfo, description: e.target.value}
                                    })
                                }}
                            />
                            <div  className="w-full flex flex-wrap m-5 space-x-1">
                                {
                                    assingnees.map((user) => {
                                        return <TaskAssignee 
                                            key={user.id}
                                            id={user.id}
                                            image={user.image}
                                            name={user.name}
                                            selected={user.selected}
                                            setTaskInfo={setTaskInfo}
                                            setAssignees={setAssignees}
                                        />
                                    })
                                }
                            </div>
                            <button 
                                className="w-full h-auto outline-none border-none bg-[#d24a01] text-white font-bold p-2 rounded-3xl"
                                onClick={handleAddTask}
                            >
                                Add Task
                            </button>
                            <p className="text-black mt-8">Made with 💗 by Ngu Helon.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddTaskForm;