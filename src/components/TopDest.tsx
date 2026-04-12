import './TopDest.css'
import './Fonts.css'

export function TopDest() {
    return (
        <div className="top-dest">
            <p className="bolder-blueish-grey-paragraph">Top Selling</p>
            <h1 className="dark-blue-header">Top Destinations</h1>
            <div className="dest-cards-box">
                <div className='dest-card'>
                    <img src="rome.png" alt="" />
                    <div className='dest-and-price'>
                        <p className='blueish-grey-paragraph'>Rome, Italy</p>
                        <p className='blueish-grey-paragraph'>$5,42k</p>
                    </div>
                    <div className='trip-info'>
                        <img src="navigation.png" alt="" className='top-dest-navigation'/>
                        <p className='smaller-blueish-grey-paragraph'>10 Days Trip</p>
                    </div>
                </div>
                <div className='dest-card'>
                    <img src="london.png" alt="" />
                    <div className='dest-and-price'>
                        <p className='blueish-grey-paragraph'>London, UK</p>
                        <p className='blueish-grey-paragraph'>$4,2k</p>
                    </div>
                    <div className='trip-info'>
                        <img src="navigation.png" alt="" className='top-dest-navigation'/>
                        <p className='smaller-blueish-grey-paragraph'>12 Days Trip</p>
                    </div>
                </div>
                <div className='dest-card'>
                    <img src="europe.png" alt="" />
                    <div className='dest-and-price'>
                        <p className='blueish-grey-paragraph'>Full Europe</p>
                        <p className='blueish-grey-paragraph'>$15k</p>
                    </div>
                    <div className='trip-info'>
                        <img src="navigation.png" alt="" className='top-dest-navigation'/>
                        <p className='smaller-blueish-grey-paragraph'>28 Days Trip</p>
                    </div>
                </div>
            </div>
            <img src="top-dest-spiral-decor.png" alt="dfdfdf" className='spiral'/>
        </div>
    )
}