import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams, Link, NavLink, useHistory } from "react-router-dom";
import About from "../About";
import Importance from "../Importance";
const Labels = () => {

    return (
        <>
            <div className="AboutContainer">
                <div className="AboutInnerContainer">
                <div className="InfoChoices">
                    <div className="About" >
                        {/* <input type="radio1" value="About" name="test" id="radio1" className="radio1" onClick={openThirdTab}/> */}
                        <NavLink to="/home/about"> About </NavLink>
                    </div>
                    <div className="ImportanceASL">
                        {/* <input type="radio3" value="Importance" name="test" id="radio3" className="radio3" onClick={openFirstTab} defaultChecked/> */}
                        <NavLink to="/home/importance"> Importance </NavLink>
                    </div>
                    <div className="WhyLearn">
                        {/* <input type="radio2" value="Learn" name="test" id="radio2" className="radio2" onClick={openSecondTab}/> */}
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
