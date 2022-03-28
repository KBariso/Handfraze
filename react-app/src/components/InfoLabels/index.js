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
                        <NavLink to="/about" className="arrow About"> About <i class="arrow down"></i></NavLink>
                    </div>
                    <div className="ImportanceASL">
                        <NavLink to="/importance" className="arrow Importance"> Importance <i class="arrow down"></i></NavLink>
                    </div>
                    <div className="WhyLearn">
                        <NavLink to="/learn" className="arrow Learn"> Learn <i class="arrow down"></i></NavLink>
                    </div>
                </div>
                <hr className="linebreak"/>
                </div>
            </div>
        </>
    )
}


export default Labels;
