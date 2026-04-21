import './Subscription.css'

export function Subscription() {
    return (
        <>
        <div className='sub-box'>
            <img src="./icons/sub-send-icon.png" alt="" className='send-icon'/>
            <h1 className='big-semibold-blueish-paragraph sub-header'>Subscribe to get information, latest news and other
                interesting offers about Jadoo</h1>
                <div className='email-box'>
                    <input type="email" className='email-input' placeholder='Your email'/>
                    <button className='sub-button'>Subscribe</button>
                </div>
                <img src="sub-circles-right.png" alt="" className='sub-circles-right'/>
                <img src="sub-circles-left.png" alt="" className='sub-circles-left'/>
                <img src="sub-plus-decor.png" alt="" className='plus-decor'/>
        </div>
        </>
    )
}