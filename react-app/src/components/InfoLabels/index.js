import React from "react";
import { NavLink } from "react-router-dom";

const Labels = () => {
    return (
        <>
            <div className="AboutContainer">
                <div className="AboutInnerContainer">
                <div className="InfoChoices">
                    <div className="About" >
                        <NavLink to="/home/about"> About </NavLink>
                    </div>
                    <div className="ImportanceASL">
                        <NavLink to="/home/importance"> Importance </NavLink>
                    </div>
                    <div className="WhyLearn">
                        <NavLink to="/home/learn"> Learn </NavLink>
                    </div>
                </div>
                <hr className="linebreak"/>
                </div>
            </div>
        </>
    )
}


export default Labels;
