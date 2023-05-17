import { nanoid } from "nanoid";
let userId = "";

function stateReducer(allUsers, action) {
   switch (action.type) {
    case "adduser" : {
        const { name, password, image } = action.userInfo;
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
            console.log("adding task", tasks)
            const {name, description, assignee} = action.taskInfo;
            const newTask = {
                id: nanoid(),
                name: name,
                description: description,
                assignee: assignee
            }

            return tasks == undefined ? [newTask] : [...tasks, newTask];
            // if(tasks != undefined) {

            //     return [
            //         ...tasks,
            //         newTask
            //     ]
            // } else {
            //     return [newTask];
            // }
        };

        case "setAllTasks" : {
            return action.tasks
        };
    }
}

export default stateReducer;
export { getNewuserId, tasksReducer };