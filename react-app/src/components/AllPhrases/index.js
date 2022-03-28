import { getAllPhrases } from "../../store/phrases"
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams, Link, NavLink, useHistory } from "react-router-dom";
import AllCategories from "../AllCategories";
// import ReactDOM from "react-dom";
// import logo from './images/CREATE.png'
import './AllPhrases.css'
import Footer from "../Footer";
// import About from "../About";
import Labels from "../InfoLabels";

const AllPhrases = () => {
    const user = useSelector((state) => state.session.user)
    const dispatch = useDispatch();
    const phraseObj = useSelector((state) => state.phrases)
    const history = useHistory()
    // console.log(phraseObj, "I AM THE PHRASE OBJ")

    const phrase = Object.values(phraseObj)
    // console.log(phrase)

    useEffect(() => {
        dispatch(getAllPhrases());
    }, [dispatch]);


    // const [showFirstTab, setShowFirstTab] = useState(false);
    // const [showSecondTab, setShowSecondTab] = useState(false);
    // const [showThirdTab, setShowThirdTab] = useState(true);

    // // const [selectedLabel, setSelectedLabel] = useState()

    // const openFirstTab = () => {
    //     if (showFirstTab) return;
    //     setShowFirstTab(true);
    //   };

    //   const openSecondTab = () => {
    //     if (showSecondTab) return;
    //     setShowSecondTab(true);
    //   };

    //   const openThirdTab = () => {
    //     if (showThirdTab) return;
    //     setShowThirdTab(true);
    //   };


    //   useEffect(() => {
    //     if (!showFirstTab) return;
    //     const closeFirstTab = () => {
    //         setShowFirstTab(false);
    //     };
    //     document.addEventListener("click", closeFirstTab);

    //     return () => document.removeEventListener("click", closeFirstTab);
    //   }, [showFirstTab]);


    //   useEffect(() => {
    //     if (!showSecondTab) return;

    //     const closeSecondTab = () => {
    //       setShowSecondTab(false);
    //     };

    //     document.addEventListener("click", closeSecondTab);

    //     return () => document.removeEventListener("click", closeSecondTab);
    //   }, [showSecondTab]);

    //   useEffect(() => {
    //     if (!showThirdTab) return;

    //     const closeThirdTab = () => {
    //       setShowThirdTab(false);
    //     };

    //     document.addEventListener("click", closeThirdTab);

    //     // return () => document.removeEventListener("click", closeThirdTab);
    //     history.push("/about")


    //   }, [showThirdTab]);



        // const [selected, setSelected] = useState("");
        // console.log(selected)
        // const changeHandler = e => {
        //   setSelected(e.target.value);
        // };



      let sessionLinks;

      if (user) {
        sessionLinks = (
        <>
            <div className="HomepageContainer">
                <AllCategories phraseProp={phraseObj}/>
                <div className="OuterWeekPhraseContainer">
                        <NavLink className="APhrase" to='/phrases/new' exact={true} activeClassName='HandfrazeLogo'>
                <div className="CreateContainer">

                            <h3 className="PhraseTitle">Create A Phrase</h3>
                    </div>
                        </NavLink>
                    <div className="WeekPhraseContainer">
                        <h2 className="WeekPhrase">Phrase of the Week</h2>
                        <iframe width="360" height="240" src="https://www.youtube.com/embed/Hs6n3cgOSh0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h3>Learn how to sign: Thank you</h3>
                    </div>

                </div>
            </div>
            <Footer />


        </>



        )
    } else {
        sessionLinks = (
            <>

            <div className="HomepageContainer">
                <AllCategories phraseProp={phraseObj}/>
                <div className="OuterWeekPhraseContainer">
                    <div className="WeekPhraseContainer">
                        <h2 className="WeekPhrase">Phrase of the Week</h2>
                        <iframe width="360" height="240" src="https://www.youtube.com/embed/Hs6n3cgOSh0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h3>Learn how to sign: Thank you</h3>
                    </div>

                </div>
            </div>
            <Footer />


        </>

        )
    }
    return (
        <>{sessionLinks}</>
    )




}

export default AllPhrases
