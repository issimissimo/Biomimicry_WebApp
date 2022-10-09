import { data } from "../../../data/data"
import { isOdd, isEven } from "../../../utils/maths";
import "../../../css/LabelButton.css";

const LabelButton = ({ activeElement, index, content, clickOnVideo, isEng }) => {

    /// PARAMS
    const HandleClick = () => {
        if (activeElement == null) return clickOnVideo(index);
        return null;
    }
    const TextColor = () => {
        if (activeElement == null) return "white";
        else {
            if (activeElement != index) return "#c0c0c0";
            return "white";
        }
    }
    const BackgroundColor = () => {
        if (activeElement == null) return data[index - 1].color_idle;
        else {
            if (activeElement != index) return data[index - 1].color_disabled;
            return data[index - 1].color_selected;
        }
    }
    const Cursor = () => {
        if (activeElement == null) return "pointer";
        else {
            if (activeElement != index) return "not-allowed";
            return "not-allowed";
        }
    }


    /// RENDER
    if (content) {
        return (
            <div
                className={`flex-1 flex items-center ${isOdd(index) ? "justify-end" : "justify-start"}`}>
                <div
                    className="LabelButton"
                    style={{ backgroundColor: BackgroundColor(), color: TextColor(), cursor: Cursor(), transition: "all .5s ease" }}
                    onClick={HandleClick}>

                    <p className="text-3xl">{isEng ? data[index - 1].label_eng : data[index - 1].label_ar}</p>

                </div>
            </div>
        )
    }
    else {
        return (
            /// EMPTY
            <div className="flex-1 h-8 bg-transparent pointer-events-none" />
        )
    }


}

export default LabelButton;