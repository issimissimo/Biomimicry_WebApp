/// React
import { useState, useEffect, useRef } from "react";

import { VideoElementState } from "../VideoElement";

const IconButton = () => {
    const [state, setState] = useState(VideoElementState.IDLE);

    return (
        <div className="w-14 h-14 bg-green-600"
            onClick={() => console.log("AAAAAAAAAAAA")}
        >

        </div>
    )
}

export default IconButton;