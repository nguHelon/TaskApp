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

    case "setAllUsers" : {
        return action.users;
    }

    default: {
        console.log("why are you running");
    }
   }
}

function getNewuserId() {
    return userId;
}

export default stateReducer;
export { getNewuserId };