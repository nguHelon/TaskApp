import React from 'react'

const TaskAssignee = ({image, name}) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <img 
            src={`../src/assets/avatars/${image}`} alt=""
            className={`w-[50px] h-[50px] rounded-full cursor-pointer `}            
        />
        <span>{name.split(" ")[0]}</span>
    </div>
  )
}

export default TaskAssignee