import logo from './images/ASL-cover-image.jpg'
import './Home.css'

const Home = () => {
    return (
        <>
                    <div className="HomeBigPicContainer">
                        <img
                            src={logo}
                            className="HomeBigPic"
                            alt="website center picture"
                        />
                        <p className='test'>hello</p>
                    </div>
        </>
    )
}

export default Home
