import React, { useEffect } from 'react'

const MeetingAttendants = ({id, name, image, selected, attendants, setMeetingInfo, setAttendants}) => {

    useEffect(() => {
        setMeetingInfo((prevInfo) => {        
            if (selected === true && !prevInfo.attendants.includes(id)) {
                return {...prevInfo, attendants: [...prevInfo.attendants, id]};
            } else {                
                return prevInfo;
            }            
        })
    }, [attendants]);

  function handleSelection() {
    setAttendants((prevAttendants) => {
        return prevAttendants.map((attendant) => {
            if (attendant.id === id) {                
                return {...attendant, selected: !attendant.selected}
            } else{
                return attendant;
            }
        })
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