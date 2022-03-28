import { getAllPhrases } from "../../store/phrases"
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AllCategories from "../AllCategories";
import './AllPhrases.css'
import Footer from "../Footer";
import CreateNewPhrase from "../CreateNewPhrase";
import { Modal } from '../../context/Modal';
import logo from './images/CREATE.png'

const AllPhrases = () => {
    const user = useSelector((state) => state.session.user)
    const dispatch = useDispatch();
    const phraseObj = useSelector((state) => state.phrases)


    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(getAllPhrases());
    }, [dispatch]);

      let sessionLinks;

      if (user) {
        sessionLinks = (
        <>
            <div className="HomepageContainer">
                <AllCategories phraseProp={phraseObj}/>
                <div className="OuterWeekPhraseContainer">
                <div className="CreateContainer" onClick={() => setShowModal(true)}>
                            <h3 className="PhraseTitle">Create A Phrase</h3>
                        <img className="APhrase" src={logo}  activeClassName='HandfrazeLogo' />
                    </div>
                        {/* </button> */}
                        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateNewPhrase />
        </Modal>
      )}
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
