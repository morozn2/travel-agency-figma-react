import './Footer.css'
import './Fonts.css'

export function Footer() {
    return (
        <footer>
            <div className='footer-main'>
                <div className='logo-and-text'>
                    <h1 className='footer-heading'>Jadoo.</h1>
                    <p className='small-paragraph-footer'>Book your trip in minute, get full Control for much longer.</p>
                </div>
                <div className='footer-info-container'>
                    <nav className='info-block-footer'>
                        <h3 className='nav-heading'>Company</h3>
                        <a href="" className='blueish-grey-paragraph'>About</a>
                        <a href="" className='blueish-grey-paragraph'>Careers</a>
                        <a href="" className='blueish-grey-paragraph'>Mobile</a>
                    </nav>
                    <nav className='info-block-footer'>
                        <h3 className='nav-heading'>Contact</h3>
                        <a href="" className='blueish-grey-paragraph'>Help/FAQ</a>
                        <a href="" className='blueish-grey-paragraph'>Press</a>
                        <a href="" className='blueish-grey-paragraph'>Affiliates</a>
                    </nav>
                    <nav className='info-block-footer'>
                        <h3 className='nav-heading'>More</h3>
                        <a href="" className='blueish-grey-paragraph'>Airlinefees</a>
                        <a href="" className='blueish-grey-paragraph'>Airline</a>
                        <a href="" className='blueish-grey-paragraph'>Low fare tips</a>
                    </nav>
                </div>
                <div className='socials-and-app'>
                    <div className='socials'>
                        <button className='social-media-button'><img src="./icons/facebook-icon.png" alt="" /></button>
                        <button className='insta-button'><img src="./icons/instagram-icon.png" alt="" /></button>
                        <button className='social-media-button'><img src="./icons/twitter-icon.png" alt="" /></button>
                    </div>
                    <p className='bigger-paragraph-footer'>Discover our app</p>
                    <div className='app'>
                        <a href=""><img src="google-play.png" alt="" /></a>
                        <a href=""><img src="play-store.png" alt="" /></a>
                    </div>
                </div>
            </div>
            <p className='smallest-blueish-grey-paragraph copyrights'>All rights reserved@jadoo.co</p>
        </footer>
    )
}