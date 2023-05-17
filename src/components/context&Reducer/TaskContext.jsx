import { React, createContext, useContext, useEffect, useReducer} from 'react'
import { tasksReducer } from './StateReducer';

const taskContext = createContext(null);

const TaskContext = ({children}) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  useEffect(() => {
    const appData = localStorage.getItem("appData") == null ? {tasks: []} : JSON.parse(localStorage.getItem("appData"));
    dispatch({
        type: "setAllTasks",
        tasks: appData.tasks
    })
  }, []);

  useEffect(() => {
    const prevValue = localStorage.getItem("appData") == null ? {tasks: []} : JSON.parse(localStorage.getItem("appData"));   

    if (tasks) {
        if (tasks.length > 0) {
          localStorage.setItem("appData", JSON.stringify({...prevValue, tasks: [...tasks]}));
        }
    } else {
        return;
    }
    
  }, [tasks]);

  return (
    <taskContext.Provider value={{tasks, dispatch}}>
        {children}
    </taskContext.Provider>
  )
}

function useContextTask() {
    return useContext(taskContext);
}

export default TaskContext;
export { useContextTask };