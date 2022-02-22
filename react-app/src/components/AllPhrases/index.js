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


    const [showFirstTab, setShowFirstTab] = useState(true);
    const [showSecondTab, setShowSecondTab] = useState(false);
    const [showThirdTab, setShowThirdTab] = useState(false);

    const openFirstTab = () => {
        if (showFirstTab) return;
        setShowFirstTab(true);
      };

      const openSecondTab = () => {
        if (showSecondTab) return;
        setShowSecondTab(true);
      };

      const openThirdTab = () => {
        if (showThirdTab) return;
        setShowThirdTab(true);
      };


      useEffect(() => {
        if (!showFirstTab) return;
        const closeFirstTab = () => {
          setShowFirstTab(false);
        };
        document.addEventListener("click", closeFirstTab);

        return () => document.removeEventListener("click", closeFirstTab);
      }, [showFirstTab]);


      useEffect(() => {
        if (!showSecondTab) return;

        const closeSecondTab = () => {
          setShowSecondTab(false);
        };

        document.addEventListener("click", closeSecondTab);

        return () => document.removeEventListener("click", closeSecondTab);
      }, [showSecondTab]);

      useEffect(() => {
        if (!showThirdTab) return;

        const closeThirdTab = () => {
          setShowThirdTab(false);
        };

        document.addEventListener("click", closeThirdTab);

        return () => document.removeEventListener("click", closeThirdTab);
      }, [showThirdTab]);



    return (
        <>
            <div className="AboutContainer">
                <div className="InfoChoices">
                    <div className="ImportanceASL">
                    <button class="tablinks" onClick={openFirstTab} id="defaultOpen">Importance of ASL</button>
                    </div>
                    <div className="WhyLearn">
                    <button class="tablinks" onClick={openSecondTab}>Why Learn ASL</button>
                    </div>
                    <div className="About" >
                    <button class="tablinks" onClick={openThirdTab}>About</button>
                    </div>
                </div>

                <hr className="linebreak"/>

                {showFirstTab && (
                    <div className="tabcontent" id="Importance">
                        <h3 >Info container</h3>
                    </div>
                )}
                {showSecondTab && (
                    <div className="tabcontent" id="Learn">
                        <h3 >test</h3>
                    </div>
                )}
                {showThirdTab && (
                    <div className="tabcontent" id="About">
                        <h3 >testttingggggg</h3>
                    </div>
                )}

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
