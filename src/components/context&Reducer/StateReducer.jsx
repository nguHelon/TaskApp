
function stateReducer(allUsers, action) {
   switch (action.type) {
    case "adduser" : {
        const { name, password, image } = action.userInfo;
        const imageNameArray = image.split("/");
        console.log(imageNameArray[imageNameArray.length - 1])
        return [
            ...allUsers,
            {
                id: 2,
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
        ]
    };

    default: {
        console.log("why are you running");
    }
   }
}

export default stateReducer;