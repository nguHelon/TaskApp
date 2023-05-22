import { React, createContext, useContext, useEffect, useReducer } from 'react';
import { meetingsReducer } from './StateReducer';

// const meetingsContext = createContext(null);

const MeetingContext = () => {
 

  return (
    [meetings, dispatch]
    // <meetingsContext.Provider value={{meetings, dispatch}}>
    //     {Children}
    // </meetingsContext.Provider>
  )
}

// function useContextMeeting() {
//     return useContext(meetingsContext);
// }

export default MeetingContext;
// export {useContextMeeting};