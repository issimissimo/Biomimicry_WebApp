/// React
import { useState, useEffect, useRef } from "react";

/// VideoElementResources
import IconButton from "./VideoElementResources/IconButton";
import LabelButton from "./VideoElementResources/LabelButton";

/// Utils
import { isOdd, isEven } from "../../utils/maths";

export const VideoElementState = {
    IDLE: Symbol("idle"),
    SELECTED: Symbol("selected"),
    INACTIVE: Symbol("inactive"),
}

export const VideoElement = ({ index }) => {
    const [state, setState] = useState(VideoElementState.IDLE);

    return (
        <li id="VideoElement" className="p-4 flex justify-between items-center" key={index}>

            <LabelButton
                index={index}
                content={isOdd(index) ? "someValue" : null}
                newState={VideoElementState.INACTIVE}
            />

            <IconButton
                index={index}
                newState={VideoElementState.INACTIVE}
            />

            <LabelButton
                index={index}
                content={isEven(index) ? "someValue" : null}
                newState={VideoElementState.INACTIVE}
            />

        </li>
    )
}
