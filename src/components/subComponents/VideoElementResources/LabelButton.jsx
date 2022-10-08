import { data } from "../../../data/data"
import { isOdd, isEven } from "../../../utils/maths";
import "../../../css/LabelButton.css";

const LabelButton = ({ activeElement, index, content, clickOnVideo, isEng }) => {

    const color = "#ac4d96";

    if (content) {
        if (activeElement == null) {
            return (
                /// IDLE
                <div
                    className={`flex-1 flex items-center cursor-pointer ${isOdd(index) ? "justify-end" : "justify-start"}`}
                    onClick={() => clickOnVideo(index)}
                >
                    <div className="LabelButton" style={{"backgroundColor": data[index - 1].color_idle}}>
                        <p className="text-3xl text-white">{isEng ? data[index - 1].label_eng : data[index - 1].label_ar}</p>
                    </div>
                </div>
            )
        }
        else {
            if (activeElement != index) {
                return (
                    /// DISABLED
                    <div
                        className={`flex-1 flex items-center cursor-not-allowed ${isOdd(index) ? "justify-end" : "justify-start"}`}
                    // onClick={() => clickOnVideo(index)}
                    >
                        <div className="LabelButton" style={{"backgroundColor": data[index - 1].color_disabled}}>
                            <p className="text-3xl text-white">{isEng ? data[index - 1].label_eng : data[index - 1].label_ar}</p>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    /// SELECTED
                    <div
                        className={`flex-1 flex items-center cursor-not-allowed ${isOdd(index) ? "justify-end" : "justify-start"}`}
                    // onClick={() => clickOnVideo(index)}
                    >
                        <div className="LabelButton" style={{"backgroundColor": data[index - 1].color_selected}}>
                            <p className="text-3xl text-white">{isEng ? data[index - 1].label_eng : data[index - 1].label_ar}</p>
                        </div>
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