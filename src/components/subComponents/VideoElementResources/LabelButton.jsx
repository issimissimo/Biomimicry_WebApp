/// React
import { useState, useEffect, useRef } from "react";

import { VideoElementState } from "../VideoElement";
import { isOdd, isEven } from "../../../utils/maths";

const LabelButton = ({ index, content }) => {
    const [state, setState] = useState(VideoElementState.IDLE);
    
    return (
        <div className={`flex-1 h-8 bg-purple-700 flex items-center 
        ${isOdd(index) ? "justify-end" : "justify-start"}`}>

            {content && (
                <p>{index}</p>
            )}

        </div>
    )
}

export default LabelButton;