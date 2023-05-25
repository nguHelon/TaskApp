import { nanoid } from "nanoid";
let userId = "";

function stateReducer(allUsers, action) {
   switch (action.type) {
    case "adduser" : {
        const { id, name, password, image } = action.userInfo;
        const imageNameArray = image.split("/");
        const newUser = {
            id: nanoid(),
            name: name,
            password: password,
            image: imageNameArray[imageNameArray.length - 1],
            tasks: {
                inProgress: 0,
                completed: 0,
                onHold: 0,
                totalTasks: 0
            },
            allTasks: [],
            meetings: [],
        }

        userId = newUser.id;

        return [
            ...allUsers,
            newUser
        ]
    };

    case "removeUser" : {
        const filteredUsers = allUsers.filter((user) => {
            if (user.id != action.userId) {
                return user;
            }
        });

        return filteredUsers;
    };

    case "tasksOperations" : {
        return allUsers.map((user) => {
            if (user.id === action.assignee) {
                user.tasks.totalTasks += 1;
                user.allTasks = [...user.allTasks, action.taskId];
                return user;
            } else {
                return user;
            }
        })
    }

    case "setAllUsers" : {
        return action.users;
    };

    default: {
        console.log("why are you running");
    }
   }
}

function getNewuserId() {
    return userId;
}

function tasksReducer(tasks, action) {
    switch(action.type) {
        case "addTask" : {
            const {id, name, description, assignee} = action.taskInfo;
            const newTask = {
                id: id,
                name: name,
                description: description,
                assignee: assignee
            }

            // action.usersDispatch({
            //     type: "tasksOperations",
            //     taskId: newTask.id,
            //     assignee: newTask.assignee
            // })

            return tasks == undefined ? [newTask] : [...tasks, newTask];            
        };

        case "removeTask" : {
            const filteredTasks = tasks.filter((task) => {
                if (task.id != action.taskId) {
                    return task;
                }
            });
    
            return filteredTasks;
        }

        case "setAllTasks" : {            
            return action.tasks
        };
    }
}

function meetingsReducer(meetings, action) {
    switch(action.type) {
        case "addMeeting" : {
            const {name, description, attendants} = action.meetingInfo;
            return [
                ...meetings,
                {
                    id: nanoid(),
                    name: name,
                    description: description,
                    attendants: attendants
                }
            ]
        }

        case "removeMeeting" : {
            const filteredMeetings = meetings.filter((meeting) => {
                if (meeting.id != action.meetingId) {
                    return meeting;
                }
            });
    
            return filteredMeetings;
        }

        case "setAllMeetings" : {
            return action.meetings === undefined ? [] : action.meetings;
        }
    }
}

export default stateReducer;
export { getNewuserId, tasksReducer, meetingsReducer };