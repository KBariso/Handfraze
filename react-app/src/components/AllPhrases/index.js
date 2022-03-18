import { getAllPhrases } from "../../store/phrases"
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import AllCategories from "../AllCategories";
// import ReactDOM from "react-dom";
// import logo from './images/CREATE.png'
import './AllPhrases.css'
import Footer from "../Footer";

const AllPhrases = () => {
    const user = useSelector((state) => state.session.user)
    const dispatch = useDispatch();
    const phraseObj = useSelector((state) => state.phrases)
    // console.log(phraseObj, "I AM THE PHRASE OBJ")

    const phrase = Object.values(phraseObj)
    // console.log(phrase)

    useEffect(() => {
        dispatch(getAllPhrases());
    }, [dispatch]);


    const [showFirstTab, setShowFirstTab] = useState(false);
    const [showSecondTab, setShowSecondTab] = useState(false);
    const [showThirdTab, setShowThirdTab] = useState(true);

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



        // const [selected, setSelected] = useState("");
        // console.log(selected)
        // const changeHandler = e => {
        //   setSelected(e.target.value);
        // };



      let sessionLinks;

      if (user) {
        sessionLinks = (
        //   <nav>
        //     <div className='navbar'>
        //       <div className='HandfrazeLogoContainer'>
        //         <NavLink to='/' exact={true} activeClassName='HandfrazeLogo'>
        //         <img className="HandfrazeLogo" src={logo}/>
        //         </NavLink>
        //       </div>
        //       <div className='LogoutButtonContainer'>
        //         <LogoutButton />
        //       </div>
        //     </div>
        //   </nav>
        <>
{/*
<div className="App">
      <h1>Radio Button check/uncheck show hide div</h1>
      <input
        type="radio"
        name="gender"
        value="male"
        id="male"
        checked={selected === "male"}
        onChange={changeHandler}
      />
      <label htmlFor="male">Male</label>
      <div aria-hidden={selected !== "male" ? true : false}>
        This is male Div
      </div>

      <input
        type="radio"
        value="female"
        id="female"
        checked={selected === "female"}
        name="gender"
        onChange={changeHandler}
      />
      <label htmlFor="female">Female</label>
      <div aria-hidden={selected !== "female" ? true : false}>
        This is female Div
      </div>
    </div> */}


            <div className="AboutContainer">
                <div className="AboutInnerContainer">
                <div className="InfoChoices">
                    <div className="About" >
                    {/* <button class="tablinks" onClick={openThirdTab}>About</button> */}
                        <input type="radio1" value="About" name="test" id="radio1" className="radio1" onClick={openThirdTab}/>
                        <label className="radio1Label" for="radio1">About</label>


                    </div>
                    <div className="ImportanceASL">
                    {/* <button class="tablinks" onClick={openFirstTab} id="defaultOpen">Importance of ASL</button> */}
                        <input type="radio3" value="Importance" name="test" id="radio3" className="radio3" onClick={openFirstTab} defaultChecked/>
                        <label className="radio3Label" for="radio3">Importance</label>
                    </div>
                    <div className="WhyLearn">
                    {/* <button class="tablinks" onClick={openSecondTab}>Why Learn ASL</button> */}
                        <input type="radio2" value="Learn" name="test" id="radio2" className="radio2" onClick={openSecondTab}/>
                        <label className="radio2Label" for="radio2">Learn</label>
                    </div>
                </div>

                <hr className="linebreak"/>

                {showFirstTab && (
                    <div className="tabcontent1" id="Importance">
                        <h2 className="firstTabContainer"> Importance </h2>
                             <p>ASL is used by Deaf and Hard of Hearing Americans in all places of business and education. ASL is America's most modern naturally-born language, yet is not always recognized as an official language.</p>
                             <p>ASL helps us be inclusive but is also a helpful tool to communicate in loud places, at long distances, or privately. Above all, learning ASL makes for a more equitable world.</p>
                    </div>
                )}
                {showSecondTab && (
                    <div className="tabcontent2" id="Learn">
                        <h2 className="secondTabContainer">Learn</h2>
                        <p>American Sign Language is a language that developed from Native American signs, French Sign Language, and Martha's Vineyard Sign Language by Deaf Americans. </p>
                        <p>ASL is language separate from English, having its own grammar structure and means of explaining thoughts and feelings. ASL use by Deaf people in America is a cultural pillar, necessary to understand the intricacies of Deaf Culture. </p>
                    </div>
                )}
                {showThirdTab && (
                    <div className="tabcontent3" id="About">
                        <h2 className="thirdTabContainer">About</h2>
                    <p>Handfraze is a clone of Handspeak, a resource to the American Sign Language (ASL) dictionary.</p> <p>Like Handspeak, Handfraze allows a resource for individuals who wish to learn basic ASL phrases from a certified national interpreter.</p>
                    </div>
                )}
                </div>


            </div>
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

<div className="AboutContainer">
                <div className="AboutInnerContainer">
                <div className="InfoChoices">
                    <div className="About" >
                    {/* <button class="tablinks" onClick={openThirdTab}>About</button> */}
                        <input type="radio1" value="About" name="test" id="radio1" className="radio1" onClick={openThirdTab}/>
                        <label className="radio1Label" for="radio1">About</label>
                    </div>
                    <div className="ImportanceASL">
                    {/* <button class="tablinks" onClick={openFirstTab} id="defaultOpen">Importance of ASL</button> */}
                        <input type="radio3" value="Importance" name="test" id="radio3" className="radio3" onClick={openFirstTab} defaultChecked/>
                        <label className="radio3Label" for="radio3">Importance</label>
                    </div>
                    <div className="WhyLearn">
                    {/* <button class="tablinks" onClick={openSecondTab}>Why Learn ASL</button> */}
                        <input type="radio2" value="Learn" name="test" id="radio2" className="radio2" onClick={openSecondTab}/>
                        <label className="radio2Label" for="radio2">Learn</label>
                    </div>
                </div>

                <hr className="linebreak"/>

                {showFirstTab && (
                    <div className="tabcontent1" id="Importance">
                        <h2 className="firstTabContainer"> Importance </h2>
                             <p>ASL is used by Deaf and Hard of Hearing Americans in all places of business and education. ASL is America's most modern naturally-born language, yet is not always recognized as an official language.</p>
                             <p>ASL helps us be inclusive but is also a helpful tool to communicate in loud places, at long distances, or privately. Above all, learning ASL makes for a more equitable world.</p>
                    </div>
                )}
                {showSecondTab && (
                    <div className="tabcontent2" id="Learn">
                        <h2 className="secondTabContainer">Learn</h2>
                        <p>American Sign Language is a language that developed from Native American signs, French Sign Language, and Martha's Vineyard Sign Language by Deaf Americans. </p>
                        <p>ASL is language separate from English, having its own grammar structure and means of explaining thoughts and feelings. ASL use by Deaf people in America is a cultural pillar, necessary to understand the intricacies of Deaf Culture. </p>
                    </div>
                )}
                {showThirdTab && (
                    <div className="tabcontent3" id="About">
                        <h2 className="thirdTabContainer">About</h2>
                    <p>Handfraze is a clone of Handspeak, a resource to the American Sign Language (ASL) dictionary.</p> <p>Like Handspeak, Handfraze allows a resource for individuals who wish to learn basic ASL phrases from a certified national interpreter.</p>
                    </div>
                )}
                </div>


            </div>
            <div className="HomepageContainer">
                <AllCategories phraseProp={phraseObj}/>
                <div className="OuterWeekPhraseContainer">
                {/* <div className="CreateContainer">
                        <NavLink to='/phrases/new' exact={true} activeClassName='HandfrazeLogo'>
                        <img className="CreateLogo" src={logo}/>
                        </NavLink>
                            <h2 className="APhrase">A Phrase</h2>
                    </div> */}
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
