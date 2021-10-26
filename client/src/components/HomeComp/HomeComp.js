import React, {useRef} from 'react';
import API from '../../utils/API'

const HomeComp = () => {

    const firstNameRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        API.saveUser({
            first_name: firstNameRef.current.value
        })
    }

    return (
        <div>
            Home Page
            <form onSubmit={handleSubmit}>
                <input className='first' ref={firstNameRef}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default HomeComp
