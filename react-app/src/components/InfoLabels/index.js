import React from "react";
import { NavLink } from "react-router-dom";
import './InfoLabels.css'

const Labels = () => {
    return (
        <>
            <div className="AboutContainer">
                <div className="AboutInnerContainer">
                <div className="InfoChoices">
                    <div >
                        <NavLink to="/about" className="About"> About </NavLink>
                    </div>
                    <div className="ImportanceASL">
                        <NavLink to="/importance" className="Importance" > Importance </NavLink>
                    </div>
                    <div className="WhyLearn">
                        <NavLink to="/learn" className="Learn"> Learn </NavLink>
                    </div>
                </div>
                <hr className="linebreak"/>
                </div>
            </div>
        </>
    )
}


export default Labels;
