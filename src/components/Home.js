import './Home.css'
import video from '../assets/video.mp4'

const Home = () => {
    return(
        <div className="home-container">
            <div className='video-container'>
                <video autoPlay loop muted width='1000' style={{ marginTop : 10}}>
                    <source src={video} type='video/mp4'/>
                </video>
            </div>
            <div className='text-container'>
                <h1>Kick off your fantasy journey!</h1>
                <h2>Your ultimate destination for all things football and stats</h2>
            </div>
        </div>
    )
}

export default Home;