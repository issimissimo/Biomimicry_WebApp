import { data } from "../../../data/data"
import { isOdd, isEven } from "../../../utils/maths";

const LabelButton = ({ activeElement, index, content, clickOnVideo, isEng }) => {

    if (content) {
        if (activeElement == null) {
            return (
                /// IDLE
                <div
                    className={`flex-1 h-20 bg-green-300 flex items-center cursor-pointer ${isOdd(index) ? "justify-end" : "justify-start"}`}
                    onClick={() => clickOnVideo(index)}
                >
                    <p>{isEng ? data[index - 1].label_eng : data[index - 1].label_ar}</p>
                </div>
            )
        }
        else {
            if (activeElement != index) {
                return (
                    /// DISABLED
                    <div
                        className={`flex-1 h-20 bg-gray-500 flex items-center cursor-not-allowed ${isOdd(index) ? "justify-end" : "justify-start"}`}
                    // onClick={() => clickOnVideo(index)}
                    >
                        <p>{isEng ? data[index - 1].label_eng : data[index - 1].label_ar}</p>
                    </div>
                )
            }
            else {
                return (
                    /// SELECTED
                    <div
                        className={`flex-1 h-20 bg-green-500 flex items-center cursor-not-allowed ${isOdd(index) ? "justify-end" : "justify-start"}`}
                    // onClick={() => clickOnVideo(index)}
                    >
                        <p>{isEng ? data[index - 1].label_eng : data[index - 1].label_ar}</p>
                    </div>
                )
            }
        }
    }
    else {
        return (
            /// EMPTY
            <div className="flex-1 h-8 bg-transparent pointer-events-none" />
        )
    }
}

export default LabelButton;