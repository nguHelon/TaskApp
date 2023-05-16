import React, { useState } from 'react'

const TaskAssignee = ({id, image, name, selected, setTaskInfo, setAssignees}) => {
  
  function handleSelection() {
    setAssignees((prevUsers) => {
        return prevUsers.map((user) => {
            return user.id == id ? {...user, selected: true} : {...user, selected: false};
        })
    })
    setTaskInfo((prevInfo) => {
        return {...prevInfo, assingee: id}
    })
  }

  return (
    <div 
        className="flex flex-col justify-center items-center"
        onClick={handleSelection}
    >
        <img 
            src={`../src/assets/avatars/${image}`} alt=""
            className={`w-[50px] h-[50px] rounded-full cursor-pointer ${ selected ? "border-4 border-[#d24a01]" : "opacity-40" }`}            
        />
        <span>{name.split(" ")[0]}</span>
    </div>
  )
}

export default TaskAssignee;