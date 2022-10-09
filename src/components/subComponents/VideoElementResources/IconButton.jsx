import { data } from "../../../data/data"
import "../../../css/IconButton.css";
import stop from "../../../images/stop.svg"


const IconButton = ({ activeElement, index, clickOnVideo }) => {

    /// PARAMS
    const HandleClick = () => {
        if (activeElement == null) return clickOnVideo(index);
        else {
            if (activeElement != index) return null;
            return clickOnVideo(null);
        }
    }
    const BackgroundColor = () => {
        if (activeElement == null) return data[index - 1].color_idle;
        else {
            if (activeElement != index) return data[index - 1].color_disabled;
            return data[index - 1].color_selected;
        }
    }
    const Icon = () => {
        if (activeElement == null) return data[index - 1].icon;
        else {
            if (activeElement != index) return data[index - 1].icon;
            return stop;
        }
    }
    const Class = () => {
        if (activeElement == null) return "IconButton_Idle";
        else {
            if (activeElement != index) return "IconButton_Disabled";
            return "IconButton_Selected";
        }
    }
    const Transition = () => {
        if (activeElement == null) return "all .5s ease";
        else {
            if (activeElement != index) return "all .5s ease";
            return null;
        }
    }


    /// RENDER
    return (
        <div className={`IconButton ${Class()}`}
            style={{ backgroundColor: BackgroundColor(), transition: Transition(), }}
            onClick={HandleClick}
        >
            <img className="w-20" src={Icon()} />
        </div>
    )
}

export default IconButton;