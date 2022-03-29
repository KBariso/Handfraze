import './importance.css'
import logo from './images/DeafDemographic.PNG'

const Importance = () => {
    return (
        <>
                    <div className="tabcontent1" id="Importance">
                        <h3 className="firstTabContainer"> Importance </h3>
                             <p>ASL is used by Deaf and Hard of Hearing Americans in all places of business and education. ASL is America's most modern naturally-born language, yet is not always recognized as an official language.</p>
                             <p>ASL helps us be inclusive but is also a helpful tool to communicate in loud places, at long distances, or privately. Above all, learning ASL makes for a more equitable world.</p>
                            <div className='PicandContent'>

                            <img className='DeafDemographPic' src={logo}></img>
                            <div className='sideContentContainer'>
                            <p className='ImportanceSideContent'>ASL is a great way to communicate in a rich, meaningful way. It’s also the best way to develop awareness and sensitivity to the Deaf culture, a community of non-hearing individuals which number more than one million in the United States alone.</p>
                            <ul>
                                <li> <b>Educators -</b> Today more than ever it’s common for educators to have children who are deaf or hard of hearing in their classroom. Many opt to learn ASL for this reason alone; however, others decide to become certified to teach ASL in the public schools. Educators with ASL teacher certification are qualified to teach ASL to both hearing and deaf students.</li>
                            </ul>
                            </div>
                            </div>
                            <div><p>
                                <ul>
                                    <li>
                                    <b>First responders -</b> According to the American Speech-Language-Hearing Association (ASHA), hearing loss is the third most prevalent chronic health condition facing older adults. As the population ages and the incidence of hearing loss increases, sign language becomes more and more relevant – especially in emergency situations when communicating with someone who is deaf or hard of hearing is critical.
                                    </li>
                                    <li>
                                    <b>Service providers -</b> Social workers, counselors, psychologists and medical professionals are also finding it beneficial to learn sign language. In fact, the Americans with Disabilities Act (ADA) requires that hospitals provide an appropriate means of communication to any patient, family member or visitor who is deaf or hard of hearing. The ADA also covers legal, education, law enforcement and employment systems.
                                    </li>
                                </ul>
                                </p></div>
                    </div>
        </>
    )
}

export default Importance
