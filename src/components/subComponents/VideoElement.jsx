import LabelButton from "./VideoElementResources/LabelButton";

import { AttentionSeeker } from "react-awesome-reveal";


const VideoElement = ({ activeElement, index, clickOnVideo, isEng }) => {

    if (activeElement == index) return (
        <li className="flex justify-center items-center" key={index}>
            <AttentionSeeker effect="wobble">
                <LabelButton
                    activeElement={activeElement}
                    index={index}
                    clickOnVideo={clickOnVideo}
                    isEng={isEng}
                />
            </AttentionSeeker>
        </li>
    )

    else return (
        <li className="flex justify-center items-center" key={index}>
            <LabelButton
                activeElement={activeElement}
                index={index}
                clickOnVideo={clickOnVideo}
                isEng={isEng}
            />
        </li>
    )
}

export default VideoElement;
