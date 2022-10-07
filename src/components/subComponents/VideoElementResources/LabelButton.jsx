/// React
import { useState, useEffect, useRef } from "react";

import { VideoElementState } from "../VideoElement";
import { isOdd, isEven } from "../../../utils/maths";

const LabelButton = ({ index, content, newState }) => {
    const [state, setState] = useState(VideoElementState.IDLE);

    if (content) {
        return (
            <>
                {newState == VideoElementState.IDLE && <div
                    className={`flex-1 h-8 bg-purple-400 flex items-center ${isOdd(index) ? "justify-end" : "justify-start"}`}
                    onClick={() => console.log(index)}
                >
                    <p>{"Nome del video"}</p>
                </div>}

                {newState == VideoElementState.SELECTED && <div
                    className={`flex-1 h-8 bg-purple-700 flex items-center ${isOdd(index) ? "justify-end" : "justify-start"}`}
                    onClick={() => console.log(index)}
                >
                    <p>{"Nome del video"}</p>
                </div>}

                {newState == VideoElementState.INACTIVE && <div
                    className={`flex-1 h-8 bg-gray-500 flex items-center ${isOdd(index) ? "justify-end" : "justify-start"}`}
                    onClick={() => console.log(index)}
                >
                    <p>{"Nome del video"}</p>
                </div>}
            </>
           
        )
    }
    else {
    return (
        <div className="flex-1 h-8 bg-transparent pointer-events-none" />
    )
}
}

export default LabelButton;