import './Hero.css'

export function Hero() {
    return (
        <div className="hero">
            <img src="girl-traveller.png" alt="girl traveller" className="hero-pic"></img>
            <div className="hero-heading-box">
                <h3 className="tagline">BEST DESTINATIONS AROUND THE WORLD</h3>
                <img src="hero-header-decore.png" alt="" className='hero-decore' />
                <h1 className="hero-heading">Travel, enjoy and live a new and
                    full life</h1>
                <p className="grey-paragraph">Built Wicket longer admire do barton vanity itself do in
                    it. Preferred to
                    sportsmen it engrossed
                    listening. Park gate sell they west hard for the.</p>
                <div className="hero-buttons">
                    <button className="find-out-button">Find out more</button>
                    <div className="demo-button-box">
                        <button className="demo-button">▶︎</button>
                        <p className="bigger-grey-paragraph">Play Demo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}