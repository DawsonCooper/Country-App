import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
export default function login(props){
    
    return (
        <div className='backdrop'>
            <div className='login-modal'>
                <input type='text' className='form-control' placeholder='Dummy Name' aria-label="Name Input" />
                <input type='password' className='form-control' placeholder='Dummy Password' aria-label='Password Input' />

                {/* Onclick will need to do two things unmount this component which should play exit animation and also save name into state we can ignore password since we arent saving any of this */}
                <input type='submit' className='btn btn-success' value='Submit' />
                
            </div>
        </div>
    )
}