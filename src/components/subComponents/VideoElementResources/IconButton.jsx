import { data } from "../../../data/data"
import "../../../css/IconButton.css";


const IconButton = ({ activeElement, index, clickOnVideo }) => {

    // if (activeElement == null) {
    //     return (
    //         /// IDLE
    //         <div className="w-40 h-40 bg-green-300 my-5 mx-10 cursor-pointer"
    //             onClick={() => clickOnVideo(index)}
    //         ></div>
    //     )
    // }
    // else {
    //     if (activeElement != index) {
    //         return (
    //             /// DISABLED
    //             <div className="w-40 h-40 bg-gray-500 my-5 mx-10 cursor-not-allowed"
    //                 // onClick={() => clickOnVideo(index)}
    //             ></div>
    //         )
    //     }
    //     else {
    //         return (
    //             /// SELECTED
    //             <div className="w-40 h-40 bg-green-500 my-5 mx-10 cursor-pointer"
    //                 onClick={() => clickOnVideo(null)}
    //             ></div>
    //         )
    //     }
    // }

    if (activeElement == null) {
        return (
            /// IDLE
            <div className={`IconButton IconButton_Idle`} style={{"backgroundColor": data[index - 1].color_idle}}
                onClick={() => clickOnVideo(index)}
            ></div>
        )
    }
    else {
        if (activeElement != index) {
            return (
                /// DISABLED
                <div className={`IconButton IconButton_Disabled`} style={{"backgroundColor": data[index - 1].color_disabled}}
                    // onClick={() => clickOnVideo(index)}
                ></div>
            )
        }
        else {
            return (
                /// SELECTED
                <div className={`IconButton IconButton_Selected`} style={{"backgroundColor": data[index - 1].color_selected}}
                    onClick={() => clickOnVideo(null)}
                ></div>
            )
        }
    }


}

export default IconButton;