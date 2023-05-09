
const Images = ({id, image, setAvatars, selected, setUserInfo}) => {

    function handleSelection() {
        setAvatars((prevAvatars) => {
            return prevAvatars.map((prevAvatar) => {
                return prevAvatar.id === id ? {...prevAvatar, selected: true} : {...prevAvatar, selected: false};
            })
        })
    }

    return (
        <img 
            src={image} alt=""
            className={`w-[50px] h-[50px] rounded-full cursor-pointer ${ selected ? "border-4 border-[#1E3F66]" : "opacity-40" }`}
            onClick={() => {
                setUserInfo((prevInfo) => {
                    return {...prevInfo, image: image}
                })
                handleSelection();
            }}
        />
    )
}

export default Images;