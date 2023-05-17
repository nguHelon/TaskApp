import React from 'react'

const MeetingAttendants = ({id, name, image, selected, setMeetingInfo, setAttendants}) => {

  function handleSelection() {
    setAttendants((prevAttendants) => {
        return prevAttendants.map((attendant) => {
            return attendant.id === id ? {...attendant, selected: !attendant.selected} : attendant;
        })
    })
    setMeetingInfo((prevInfo) => {
        console.log("adding attendant")
        return selected ? {...prevInfo, attendants: [...prevInfo.attendants, id]} : prevInfo;
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

export default MeetingAttendants