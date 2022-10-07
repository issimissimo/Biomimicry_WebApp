/// Subcomponents
import VideoElement from "./subComponents/VideoElement";


const List = ({ activeElement, clickOnVideo }) => {

    const numbers = [1, 2, 3, 4, 5, 6];

    return (
        <div className="bg-blue-400 flex-1 w-full flex items-center">
            <ul className="w-full flex-1 flex flex-col justify-between">
                {
                    numbers.map((index) =>
                        <VideoElement
                            key={index}
                            index={index}
                            clickOnVideo={clickOnVideo}
                            activeElement={activeElement}
                        />)
                }
            </ul>
        </div>
    )
}

export default List;