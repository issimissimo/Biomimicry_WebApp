/// React
import { useState, useEffect, useRef } from "react";

/// Subcomponents
import { VideoElement, VideoElementState } from "./subComponents/VideoElement";


const List = ({ activeElement }) => {

    useEffect(() => {
        console.log("List - Active Element: " + activeElement);
    }, []);

    const numbers = [1, 2, 3, 4, 5, 6];


    const listItems = numbers.map((number) =>
        <VideoElement key={number} index={number} />
    );

    return (
        <div className="bg-blue-400 flex-1 w-full flex items-center">
            <ul className="w-full">
                {
                    numbers.map((index) => <VideoElement key={index} index={index} />)
                }
            </ul>
        </div>
    )
}

export default List;