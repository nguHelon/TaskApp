
function stateReducer(allUsers, action) {
   switch (action.type) {
    case "adduser" : {
        const { name, password, image } = action.userInfo
        return [
            ...allUsers,
            {
                id: 2,
                name: name,
                password: password,
                image: image
            }
        ]
    };

    default: {
        console.log("why are you running");
    }
   }
}

export default stateReducer;