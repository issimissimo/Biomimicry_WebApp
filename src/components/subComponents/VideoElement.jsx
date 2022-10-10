import LabelButton from "./VideoElementResources/LabelButton";


const VideoElement = ({ activeElement, index, clickOnVideo, isEng }) => {

    return (
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
