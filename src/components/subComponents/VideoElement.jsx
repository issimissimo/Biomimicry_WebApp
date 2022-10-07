/// VideoElementResources
import IconButton from "./VideoElementResources/IconButton";
import LabelButton from "./VideoElementResources/LabelButton";

/// Utils
import { isOdd, isEven } from "../../utils/maths";


const VideoElement = ({ activeElement, index, clickOnVideo }) => {

    return (
        <li id="VideoElement" className="my-3 p-4 flex justify-between items-center" key={index}>

            <LabelButton
                activeElement={activeElement}
                index={index}
                content={isOdd(index) ? "someValue" : null}
                clickOnVideo={clickOnVideo}
            />

            <IconButton
                activeElement={activeElement}
                index={index}
                clickOnVideo={clickOnVideo}
            />

            <LabelButton
                activeElement={activeElement}
                index={index}
                content={isEven(index) ? "someValue" : null}
                clickOnVideo={clickOnVideo}
            />

        </li>
    )
}

export default VideoElement;
