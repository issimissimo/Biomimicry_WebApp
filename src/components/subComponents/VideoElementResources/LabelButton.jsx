import { isOdd, isEven } from "../../../utils/maths";

const LabelButton = ({ activeElement, index, content, clickOnVideo }) => {

    if (content) {
        if (activeElement == null) {
            return (
                /// IDLE
                <div
                    className={`flex-1 h-16 bg-green-300 flex items-center ${isOdd(index) ? "justify-end" : "justify-start"}`}
                    onClick={() => clickOnVideo(index)}
                >
                    <p>{"Nome del video"}</p>
                </div>
            )
        }
        else {
            if (activeElement != index) {
                return (
                    /// DISABLED
                    <div
                        className={`flex-1 h-16 bg-gray-500 flex items-center ${isOdd(index) ? "justify-end" : "justify-start"}`}
                        // onClick={() => clickOnVideo(index)}
                    >
                        <p>{"Nome del video"}</p>
                    </div>
                )
            }
            else {
                return (
                    /// SELECTED
                    <div
                        className={`flex-1 h-16 bg-green-500 flex items-center ${isOdd(index) ? "justify-end" : "justify-start"}`}
                        // onClick={() => clickOnVideo(index)}
                    >
                        <p>{"Nome del video"}</p>
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