import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css'

const NotFound = () => {
    const history = useHistory()
    const handleNotFound = () => {
        history.push('/home')
    }
    return (
        <div className='notFound'>
            {/* Not existing page search or Not found page */}
            <div className='bg-danger text-white text-center fw-bold p-2'>
                <h1>404</h1>
                <h3>PAGE NOT FOUND</h3>
            </div>
            <div className='text-center mt-2'>
                <button onClick={handleNotFound} className='btn btn-outline-dark btn-lg'>Back to home</button>
            </div>
        </div>


    );
};

export default NotFound;