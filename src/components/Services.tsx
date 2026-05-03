import './Services.css'
import './Fonts.css'

export function Services() {
    return (
        <div className="services">
            <img src="services-plus-decor.png" alt="" className="plus-decor" />
            <p className="bolder-blueish-grey-paragraph">CATEGORY</p>
            <h1 className="dark-blue-header">We Offer Best Services</h1>
            <div className="service-cards-box">
                <div className="service-card">
                    <img src="satellite-dish.png" alt="" className="service-card-image" />
                    <h3 className="service-card-header">Calculated Weather</h3>
                    <p className="grey-paragraph">Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
                <div className="service-card-shadow">
                    <img src="card-plane.png" alt="" className="service-card-image" />
                    <h3 className="service-card-header">Best Flights</h3>
                    <p className="grey-paragraph">Engrossed listening. Park gate sell they west hard for the.</p>
                    <img src="services-rectangle-decor.png" alt="" className="rectangle-decor" />
                </div>
                <div className="service-card">
                    <img src="mic.png" alt="" className="service-card-image" />
                    <h3 className="service-card-header">Local Events</h3>
                    <p className="grey-paragraph">Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
                </div>
                <div className="service-card">
                    <img src="cogwheel.png" alt="" className="service-card-image" />
                    <h3 className="service-card-header">Customization</h3>
                    <p className="grey-paragraph">We deliver outsourced
                        aviation services for
                        military customers</p>
                </div>
            </div>
        </div>
    )
}