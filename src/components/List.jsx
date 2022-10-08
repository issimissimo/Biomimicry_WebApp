/// Subcomponents
import VideoElement from "./subComponents/VideoElement";

import { data } from "./../data/data";


const List = ({ activeElement, clickOnVideo, isEng }) => {

    return (
       <div className="flex-1 w-full flex items-center">
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
        </div>
    )
}

export default List;