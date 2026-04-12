import './Airlines.css'

export function Airlines() {
    return (
        <div className='airlines-box'>
            <img src="axon.png" alt="" className='airline' />
            <img src="jetstar.png" alt="" className='airline' />
            <div className='center-airline-box'>
                <img src="expedia.png" alt="" className='airline center-airline' />
            </div>
            <img src="quantas.png" alt="" className='airline' />
            <img src="alitalia.png" alt="" className='airline' />
        </div>
    )
}