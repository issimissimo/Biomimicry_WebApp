import { data } from "../../../data/data"
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

    const Opacity = () => {
        if (activeElement == null) return "1";
        else {
            if (activeElement != index) return "0.6";
            return "1";
        }
    }

    const Width = () => {
        // return isEng ? data[index - 1].width_eng : isEng ? data[index - 1].width_ara
        if (isEng) return data[index - 1].width_eng
        else return data[index - 1].width_ara
    }


    /// RENDER

    return (
        <div
            className="m-7 flex-1 flex items-center justify-center">
            <div
                className="LabelButton"
                style={{ backgroundColor: BackgroundColor(), color: TextColor(), cursor: Cursor(), transition: "all .5s ease", opacity: Opacity() }}
                onClick={HandleClick}>

                {/* <p className="text-3xl">{isEng ? data[index - 1].label_eng : data[index - 1].label_ar}</p> */}
                <img
                    className="h-11"
                    // style={{ width: data[index - 1].width }}
                    style={{ width: Width() }}
                    src={isEng ? data[index - 1].label_svg_eng : data[index - 1].label_svg_ar} />

            </div>
        </div>
    )




}

export default LabelButton;