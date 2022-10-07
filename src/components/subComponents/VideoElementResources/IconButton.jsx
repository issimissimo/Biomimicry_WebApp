/// React
import { useState, useEffect, useRef } from "react";

import { VideoElementState } from "../VideoElement";

const IconButton = ({ activeElement, index, newState, clickOnVideo }) => {
    // const [state, setState] = useState(VideoElementState.IDLE);


    // return (<>
    //     {newState == VideoElementState.IDLE && <div className="w-14 h-14 bg-green-300 m-2"
    //         onClick={() => clickOnVideo(index)}
    //     ></div>}

    //     {newState == VideoElementState.SELECTED && <div className="w-14 h-14 bg-green-600 m-2"
    //         onClick={() => clickOnVideo(index)}
    //     ></div>}

    //     {newState == VideoElementState.INACTIVE && <div className="w-14 h-14 bg-gray-500 m-2"
    //         onClick={() => clickOnVideo(index)}
    //     ></div>}

    // </>)

    if (activeElement == null) {
        return (
            <div className="w-14 h-14 bg-green-300 m-2"
                onClick={() => clickOnVideo(index)}
            ></div>
        )
    }
    else {
        if (activeElement != index) {
            return (
                <div className="w-14 h-14 bg-gray-500 m-2"
                    onClick={() => clickOnVideo(index)}
                ></div>
            )
        }
        else {
            return (
                <div className="w-14 h-14 bg-green-500 m-2"
                    onClick={() => clickOnVideo(index)}
                ></div>
            )
        }
    }


}

export default IconButton;