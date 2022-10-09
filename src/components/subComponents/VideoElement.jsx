/// VideoElementResources
import IconButton from "./VideoElementResources/IconButton";
import LabelButton from "./VideoElementResources/LabelButton";

/// Utils
import { isOdd, isEven } from "../../utils/maths";


const VideoElement = ({ activeElement, index, clickOnVideo, isEng }) => {

    return (
        <li className="p-4 flex justify-between items-center" key={index}>

            <LabelButton
                activeElement={activeElement}
                index={index}
                content={isOdd(index) ? "someValue" : null}
                clickOnVideo={clickOnVideo}
                isEng={isEng}
            />

            <IconButton
                activeElement={activeElement}
                index={index}
                clickOnVideo={clickOnVideo}
                isEng={isEng}
            />

            <LabelButton
                activeElement={activeElement}
                index={index}
                content={isEven(index) ? "someValue" : null}
                clickOnVideo={clickOnVideo}
                isEng={isEng}
            />

        </li>
    )
}

export default VideoElement;
