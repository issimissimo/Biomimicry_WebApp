import CircleButton from "./VideoElementRes/CircleButton";
import LabelButton from "./VideoElementRes/LabelButton";

export const VideoElementState = {
    IDLE: Symbol("idle"),
    SELECTED: Symbol("selected"),
    INACTIVE: Symbol("inactive"),
}

export const VideoElement = () => {
    return (
        <LabelButton/>
    )
}