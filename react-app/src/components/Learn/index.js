import './learn.css'
import logo from './images/MarthasVineyard.PNG'
import logo2 from './images/SignNotOnlyHands.PNG'

const Learn = () => {
    return (
        <>
                    <div className="tabcontent2" id="Learn">
                    <div className="LearnContent">
                    <h3 className="secondTabContainer">Learn</h3>
                    <p>American Sign Language is a language that developed from Native American signs, French Sign Language, and Martha's Vineyard Sign Language by Deaf Americans. </p>
                    <p>ASL is a language separate from English, having its own grammar structure and means of explaining thoughts and feelings. ASL use by Deaf people in America is a cultural pillar, necessary to understand the intricacies of Deaf Culture. </p>

                    </div>
                    <div>
                    <img
            src={logo}
            className="MarthasVineyard"
            alt="MarthasVineyard"
            />
            <p>Martha's Vineyard Sign Language (MVSL) was a village sign-language that was once widely used on the island of Martha's Vineyard from the early 18th century to 1952. <br /> It was used by both Deaf and hearing people in the community; consequently, deafness did not become a barrier to participation in public life. <br /> Deaf people who signed Martha's Vineyard Sign Language were extremely independent. <br /></p>
                    </div>
                    </div>
                    <div className='LearnPic2'>
                    <img
                        src={logo2}
                        className="SignNotOnlyHands"
                        alt="SignNotOnlyHands"
                            />
                            <ul>
                            <li>
                            Hands: The hands are presented according to a handshape, a movement, an orientation, a location and are associated with a non-manual expression (face and body): they are their phonemes.
                            </li>
                            <br />
                            <li>
                            Facial Expression: Provide information or modify the meaning of a sign: movement of the head, eyebrows, look, cheeks, mouth and tongue.
                            </li>
                            </ul>
                    </div>
                    <div>

                    </div>
                            <p className='LearnPoint'>
                        <ul>

                            <br />
                            <li>
                            Body Movements: The inclination, position of the body and shoulders are essential to express roles or the type of sentence (interrogative, exclamatory, doubtful, etc.).
                            </li>
                            <br />
                            <li>
                            Grammar: Phonology, syntax, semantics, pragmatics,... everything changes. The classifiers and thematization in sign languages are particularly interesting.
                            </li>
                        </ul>
                        <p className='Citation'>Emilio Ferreiro 2019, Unusualverse, accessed March 2022, https://www.unusualverse.com/2019/09/infographic-sign-language-rights-for-all.html</p>
            </p>

        </>
    )
}

export default Learn
