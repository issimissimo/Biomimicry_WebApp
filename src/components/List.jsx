/// React
import { useState, useEffect, useRef } from "react";






function isEven(n) {
    return n % 2 == 0;
}

function isOdd(n) {
    return Math.abs(n % 2) == 1;
}








const List = ({ activeElement }) => {

    useEffect(() => {
        console.log("List - Active Element: " + activeElement);
    }, []);

    const numbers = [1, 2, 3, 4, 5, 6];

    // const Left = () => {
    //     return (
    //         <div className="flex-1 h-8 bg-yellow-600 flex justify-end items-center">
    //             <p>Left</p>
    //         </div>
    //     )
    // }

    const Center = () => {
        return (
            <div className="w-14 h-14 bg-green-600"></div>
        )
    }

    // const Right = () => {
    //     return (
    //         <div className="flex-1 h-8 bg-purple-700 flex justify-start items-center">
    //             <p>Right</p>
    //         </div>
    //     )
    // }

    const Label = ({ id, content }) => {
        return (
            <div className={`flex-1 h-8 bg-purple-700 flex items-center 
            ${isOdd(id) ? "justify-end" : "justify-start"}`}>

                {content && (
                    <p>{id}</p>
                )}

            </div>
        )
    }


    const listItems = numbers.map((number) =>
        <li id="VideoElement" className="p-4 flex justify-between items-center" key={number}>
            {
                <Label
                    id={number}
                    content={isOdd(number) ? "someValue" : ""}
                />
            }
            <Center />
            {
                <Label
                    id={number}
                    content={isEven(number) ? "someValue" : ""}
                />
            }
        </li>
    );

    return (
        <div className="bg-blue-400 flex-1 w-full flex items-center">
            <ul className="w-full">{listItems}</ul>
        </div>
    )
}

export default List;