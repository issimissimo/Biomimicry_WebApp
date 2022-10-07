
const IconButton = ({ activeElement, index, clickOnVideo }) => {

    if (activeElement == null) {
        return (
            /// IDLE
            <div className="w-32 h-32 bg-green-300 m-10"
                onClick={() => clickOnVideo(index)}
            ></div>
        )
    }
    else {
        if (activeElement != index) {
            return (
                /// DISABLED
                <div className="w-32 h-32 bg-gray-500 m-10"
                    // onClick={() => clickOnVideo(index)}
                ></div>
            )
        }
        else {
            return (
                /// SELECTED
                <div className="w-32 h-32 bg-green-500 m-10"
                    onClick={() => clickOnVideo(null)}
                ></div>
            )
        }
    }


}

export default IconButton;