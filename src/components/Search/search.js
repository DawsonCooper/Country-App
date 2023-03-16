import Navbar from '../Navbar/navbar'
import React from  'react'
import './search.css'
export default function Search(props) {
    return(
        <div>
            <Navbar />
            <h1 className='text-center mt-5'>Search</h1>
            <div className='search-form d-flex justify-content-center'>
                <input type='text' className='form-control w-50' placeholder='Find News' />
                <button type='submit' className='btn btn-primary'>Search</button>
            </div>
        </div>
    )
} 