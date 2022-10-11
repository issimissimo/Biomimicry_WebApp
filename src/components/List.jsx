import VideoElement from "./subComponents/VideoElement";
import StopButton from "./subComponents/VideoElementResources/StopButton";
import { AttentionSeeker } from "react-awesome-reveal";
import { data } from "./../data/data";


const List = ({ activeElement, clickOnVideo, isEng }) => {

    return (
        <div className="flex-1 w-full flex flex-col justify-center items-center">


            <ul className="w-full flex-1 flex flex-col justify-center">
                {
                    data.map((item) =>
                        <VideoElement
                            key={item.id}
                            index={item.id}
                            clickOnVideo={clickOnVideo}
                            activeElement={activeElement}
                            isEng={isEng}
                        />)
                }
            </ul>


            <div className="w-full flex-1 flex flex-col justify-center items-center">

                {activeElement ?

                    <AttentionSeeker effect="pulse">
                        <StopButton
                            clickOnVideo={clickOnVideo}
                            activeElement={activeElement}
                        />
                    </AttentionSeeker>

                    :

                    <StopButton
                        clickOnVideo={clickOnVideo}
                        activeElement={activeElement}
                    />

                }

            </div>

        </div>
    )
}

export default List;