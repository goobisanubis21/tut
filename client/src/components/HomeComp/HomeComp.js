import React, {useRef} from 'react';
import './homeComp.css';
// import API from '../../utils/API'

const HomeComp = () => {

    // const firstNameRef = useRef()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     API.saveUser({
    //         first_name: firstNameRef.current.value
    //     })
    // }

    return (
        <div className='home-container'>
            <div className='home-title'>
                <h1>Tutor Company Name</h1>
            </div>
            <div>
                
            </div>
            {/* <form onSubmit={handleSubmit}>
                <input className='first' ref={firstNameRef}></input>
                <button type='submit'>Submit</button>
            </form> */}
        </div>
    )
}

export default HomeComp
