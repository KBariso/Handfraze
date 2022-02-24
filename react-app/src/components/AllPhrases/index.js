import { getAllPhrases } from "../../store/phrases"
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import AllCategories from "../AllCategories";
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

            <div className="AboutContainer">
                <div className="AboutInnerContainer">
                                    <div className="InfoChoices">
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
                    <div className="About" >
                    {/* <button class="tablinks" onClick={openThirdTab}>About</button> */}
                        <input type="radio1" value="About" name="test" id="radio1" className="radio1" onClick={openThirdTab}/>
                        <label className="radio1Label" for="radio1">About</label>
                    </div>
                </div>

                <hr className="linebreak"/>

                {showFirstTab && (
                    <div className="tabcontent1" id="Importance">
                        <h2 className="firstTabContainer"> Importance </h2>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                             <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                )}
                {showSecondTab && (
                    <div className="tabcontent2" id="Learn">
                        <h2 className="secondTabContainer">Learn</h2>
                        <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                )}
                {showThirdTab && (
                    <div className="tabcontent3" id="About">
                        <h2 className="thirdTabContainer">About</h2>
                    <p>Excepteur sint</p> <p>occaecat cupidatat non proident,</p>  sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                        <iframe width="360" height="240" src="https://www.youtube.com/embed/nRuHFTWZqhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h3>Learn how to sign: I need to charge my phone</h3>
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
                    <div className="About" >
                    {/* <button class="tablinks" onClick={openThirdTab}>About</button> */}
                        <input type="radio1" value="About" name="test" id="radio1" className="radio1" onClick={openThirdTab}/>
                        <label className="radio1Label" for="radio1">About</label>
                    </div>
                </div>

                <hr className="linebreak"/>

                {showFirstTab && (
                    <div className="tabcontent1" id="Importance">
                        <h2 className="firstTabContainer"> Importance </h2>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                             <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                )}
                {showSecondTab && (
                    <div className="tabcontent2" id="Learn">
                        <h2 className="secondTabContainer">Learn</h2>
                        <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                )}
                {showThirdTab && (
                    <div className="tabcontent3" id="About">
                        <h2 className="thirdTabContainer">About</h2>
                    <p>Excepteur sint</p> <p>occaecat cupidatat non proident,</p>  sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                        <iframe width="360" height="240" src="https://www.youtube.com/embed/nRuHFTWZqhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h3>Learn how to sign: I need to charge my phone</h3>
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
