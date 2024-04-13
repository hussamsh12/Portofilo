import React from "react";




function Card(props)
{
    return(
        <div>
            <div className="card">
                <div className="box">
                    <div>
                        <div className="percent">
                            <svg>
                                <circle cx={70} cy={70} r={70}></circle>
                                <circle cx={70} cy={70} r={70}></circle>
                            </svg>
                            <div className="number">
                                <h2>{props.percentage}%</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text">
                    {props.skill}
                </div>
            </div>
        </div>
    );


}


export default Card;