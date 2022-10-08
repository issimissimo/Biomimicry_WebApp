import { data } from "../../../data/data"
import "../../../css/IconButton.css";
import stop from "../../../images/stop.svg"


const IconButton = ({ activeElement, index, clickOnVideo }) => {

    if (activeElement == null) {
        return (
            /// IDLE
            <div className={`IconButton IconButton_Idle`}
                style={{ "backgroundColor": data[index - 1].color_idle }}
                onClick={() => clickOnVideo(index)}
            >
                <img className="w-20" src={data[index - 1].icon} />
            </div>
        )
    }
    else {
        if (activeElement != index) {
            return (
                /// DISABLED
                <div className={`IconButton IconButton_Disabled`}
                    style={{ "backgroundColor": data[index - 1].color_disabled }}
                // onClick={() => clickOnVideo(index)}
                >
                    <img className="w-20" src={data[index - 1].icon} />
                </div>
            )
        }
        else {
            return (
                /// SELECTED
                <div className={`IconButton IconButton_Selected`}
                    style={{ "backgroundColor": data[index - 1].color_selected }}
                    onClick={() => clickOnVideo(null)}
                >
                    <img className="w-20" src={stop} />
                </div>
            )
        }
    }


}

export default IconButton;