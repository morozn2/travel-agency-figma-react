import './Testimonials.css'
import './Fonts.css'

export function Testimonials() {
    return (
        <div className='testimonials-outer-box'>
            <div className='left-side'>
                <p className='bolder-blueish-grey-paragraph'>TESTIMONIALS</p>
                <h1 className='dark-blue-header'>What People Say About Us.</h1>
                <img src="dots.png" alt="" className='dots' />
            </div>
            <div className='testimonial'>
                <div className='text-box'>
                    <p className='smaller-blueish-grey-paragraph'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                </div>
                <div className='test-author'>
                    <p className='bolder-blueish-grey-paragraph'>Chris Tomas</p>
                    <p className='smallest-blueish-grey-paragraph'>CEO of Red Button</p>
                </div>
            </div>
            <div className='top-testimonial'>
                <img src="./icons/man-avatar.png" alt="" className='man-avatar'/>
                <div className='text-box'>
                    <p className='smaller-blueish-grey-paragraph'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                </div>
                <div>
                    <p className='bolder-blueish-grey-paragraph'>Mike Taylor</p>
                    <p className='smallest-blueish-grey-paragraph'>Lahore, Pakistan</p>
                </div>
            </div>
            <div className='buttons-box'>
                <button className='arrow'><img src="./icons/up-arrow.png" alt="" /></button>
                <button className='arrow'><img src="./icons/down-arrow.png" alt="" /></button>
            </div>
        </div>
    )
}