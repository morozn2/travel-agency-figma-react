import './Trips.css'
import './Fonts.css'

export function Trips() {
    return (
        <div className='trips-outer-box'>
            <div className='trips-box'>
                <p className='bolder-blueish-grey-paragraph'>Easy and Fast</p>
                <h1 className='dark-blue-header'>Book Your Next Trip In 3 Easy Steps</h1>
                <div className='outer-trip-steps-box'>
                    <div className='trip-steps-box'>
                        <img src="./icons/destination-icon.png" alt="" className='trip-steps-icon' />
                        <div className='step-desc'>
                            <p className='bold-blueish-grey-paragraph'>Choose Destination</p>
                            <p className='light-blueish-grey-paragraph'>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                    <div className='trip-steps-box'>
                        <img src="./icons/payment-icon.png" alt="" className='trip-steps-icon' />
                        <div>
                            <p className='bold-blueish-grey-paragraph'>Make Payment</p>
                            <p className='light-blueish-grey-paragraph'>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                    <div className='trip-steps-box'>
                        <img src="./icons/airport-icon.png" alt="" className='trip-steps-icon' />
                        <div>
                            <p className='bold-blueish-grey-paragraph'>Reach Airport on Selected Date</p>
                            <p className='light-blueish-grey-paragraph'>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='trip-to-greece'>
                <img src="greece.jpg" alt="ddf" className='greece-trip-img' />
                <p className='black-paragraph-poppins'>Trip To Greece</p>
                <p className='light-grey-paragraph'>14-29 June | by Robbin Joseph </p>
                <div className='options-box'>
                    <button className='option-button'><img src="./icons/leaf-icon.png" alt="" /></button>
                    <button className='option-button'><img src="./icons/map-icon.png" alt="" /></button>
                    <button className='option-button'><img src="./icons/send-icon.png" alt="" /></button>
                </div>
                <div className='info-and-like'>
                    <div className='greece-trip-info'>
                        <img src="./icons/building-icon.png" alt="" className='info-icon' />
                        <p className='light-grey-paragraph'>24 people are going</p>
                    </div>
                    <button className='heart-button'><img src="./icons/heart-icon.png" alt="" /></button>
                </div>
            </div>
            <div className='trip-to-rome'>
                <img src="./icons/rome-icon.png" alt="" className='rome-icon' />
                <div className='trip-content'>
                    <div className='rome-heading-container'>
                        <p className='light-grey-paragraph'>Ongoing</p>
                        <p className='black-paragraph-poppins'>Trip To Rome</p>
                    </div>
                    <div className='progress-wrap'>
                        <p className='small-black-paragraph-poppins'><span className='purple-paragraph'>40%</span> completed</p>
                        <img src="progress-bar.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}