import { getAllPhrases } from "../../store/phrases"
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AllCategories from "../AllCategories";
import './AllPhrases.css'

const AllPhrases = () => {
    const dispatch = useDispatch();
    const phraseObj = useSelector((state) => state.phrases)
    // console.log(phraseObj, "I AM THE PHRASE OBJ")

    const phrase = Object.values(phraseObj)
    // console.log(phrase)

    useEffect(() => {
        dispatch(getAllPhrases());
    }, [dispatch]);



    return (
        <>
            <div className="AboutContainer">
                <div className="InfoChoices">
                    <div className="ImportanceASL">
                       Importance of ASL
                    </div>
                    <div className="WhyLearn">
                       Why Learn ASL?
                    </div>
                    <div className="About">
                       About
                    </div>
                </div>
                <hr className="linebreak"/>
                <h1>Info container</h1>
            </div>
            <div className="HomepageContainer">
                <AllCategories phraseProp={phraseObj}/>

                <div className="WeekPhraseContainer">
                    <h2 className="WeekPhrase">Phrase of the Week</h2>
                    <iframe width="400" height="300" src="https://www.youtube.com/embed/nRuHFTWZqhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h3>Learn how to sign: I need to charge my phone</h3>
                </div>

            </div>
        </>
    )




}

export default AllPhrases
