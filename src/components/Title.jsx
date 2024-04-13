import React, { useState, useEffect } from "react";
import "../styling/styling.css";



function Title() {
    const titles = ["Web Development", "Mobile Development", "Software Solutions", "Application Building"];
    const [currTitleIndex, setCurrTitleIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3500);

        return () => clearInterval(intervalId);
    }, [titles.length]);

    return (
        <div id="title">
            <h1 data-text={titles[currTitleIndex]}>
                {titles[currTitleIndex]}
            </h1>
        </div>
    );
}

export default Title;