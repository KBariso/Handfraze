import './Home.css'

const Home = () => {
    return (
        <>
                    <div className="HomeBigPicContainer">
                        <div className="HomeBigPic">
                            <div className="WelcomeHandfraze">
                                <h1>WELCOME TO HANDFRAZE</h1>
                                <hr className="linebreak" />
                                <h3>A simple guide to basic American Sign Language phrases</h3>
                            </div>
                        </div>
                    </div>
                    <div className="Description1Container">
                        <div className="Desc1Size">
                            <div className="Description1">
                            <h1 className="Desc1Header">
                            Learning The Essentials To<br/>
                            American Sign Language <br/>
                            (ASL) <br/>
                            <br/>
                            </h1>
                            <p className="SmallDesc1">Handfraze is a clone of Handspeak, a resource to the American Sign Language (ASL) dictionary.
                            Like Handspeak, Handfraze allows a resource for individuals who wish to learn basic ASL phrases from a certified national interpreter.</p>
                        </div>
                        <div>
                            <div className="WeekPhraseContainer">
                                <h2 className="WeekPhrase">Phrase of the Week</h2>
                                <iframe className="PhraseWeekVid" width="360" height="240" src="https://www.youtube.com/embed/Hs6n3cgOSh0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <h3>Learn how to sign: Thank you</h3>
                            </div>
                        </div>
                        </div>


                    </div>
        </>
    )
}

export default Home
