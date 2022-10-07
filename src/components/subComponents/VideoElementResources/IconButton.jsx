/// React
import { useState, useEffect, useRef } from "react";

import { VideoElementState } from "../VideoElement";

const IconButton = ({ index, newState }) => {
    // const [state, setState] = useState(VideoElementState.IDLE);

    return (<>
        {newState == VideoElementState.IDLE && <div className="w-14 h-14 bg-green-300 m-2"
            onClick={() => console.log("iconbutton: " + index)}
        ></div>}

        {newState == VideoElementState.SELECTED && <div className="w-14 h-14 bg-green-600 m-2"
            onClick={() => console.log("iconbutton: " + index)}
        ></div>}

        {newState == VideoElementState.INACTIVE && <div className="w-14 h-14 bg-gray-500 m-2"
            onClick={() => console.log("iconbutton: " + index)}
        ></div>}

    </>


    )
}

export default IconButton;