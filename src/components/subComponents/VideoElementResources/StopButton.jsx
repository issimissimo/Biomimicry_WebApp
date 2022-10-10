import { data } from "../../../data/data"
import "../../../css/StopButton.css";
import stop from "../../../images/stop.svg"


const StopButton = ({ activeElement, clickOnVideo }) => {

    const Class = () => {
        if (activeElement == null) return "StopButton_Disabled";
        else return "StopButton_Enabled";
    }
    const BackgroundColor = () => {
        if (activeElement == null) return "#717070";
        else return data[activeElement - 1].color_selected;
    }

    /// RENDER
    return (
        <div className={`StopButton ${Class()}`}
            style={{ backgroundColor: BackgroundColor(), transition: "all .5s ease" }}
            onClick={() => clickOnVideo(null)}
        >
            <img className="w-20" src={stop} />
        </div>
    )
}

export default StopButton;