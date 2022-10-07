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

export const VideoElement = ({ activeElement, index, clickOnVideo, newState }) => {
    const [state, setState] = useState(VideoElementState.IDLE);


    return (
        <li id="VideoElement" className="p-4 flex justify-between items-center" key={index}>

            <LabelButton
                activeElement={activeElement}
                index={index}
                content={isOdd(index) ? "someValue" : null}
                newState={newState}
                clickOnVideo={clickOnVideo}
            />

            <IconButton
                activeElement={activeElement}
                index={index}
                newState={newState}
                clickOnVideo={clickOnVideo}
            />

            <LabelButton
                activeElement={activeElement}
                index={index}
                content={isEven(index) ? "someValue" : null}
                newState={newState}
                clickOnVideo={clickOnVideo}
            />

        </li>
    )
}
