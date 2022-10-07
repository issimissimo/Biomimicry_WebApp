/// React
import { useState, useEffect, useRef } from "react";

/// Subcomponents
import { VideoElement, VideoElementState} from "./subComponents/VideoElement";

/// Utils
import { isEven, isOdd } from "../utils/maths";



const List = ({ activeElement }) => {

    useEffect(() => {
        console.log("List - Active Element: " + activeElement);
    }, []);

    const numbers = [1, 2, 3, 4, 5, 6];

    // const Center = () => {
    //     return (
    //         <div className="w-14 h-14 bg-green-600"></div>
    //     )
    // }

    // const Label = ({ id, content }) => {
    //     return (
    //         <div className={`flex-1 h-8 bg-purple-700 flex items-center 
    //         ${isOdd(id) ? "justify-end" : "justify-start"}`}>

    //             {content && (
    //                 <p>{id}</p>
    //             )}

    //         </div>
    //     )
    // }


    const listItems = numbers.map((number) =>
        <VideoElement key={number} index={number} />
    );

    return (
        <div className="bg-blue-400 flex-1 w-full flex items-center">
            <ul className="w-full">{listItems}</ul>
        </div>
    )
}

export default List;