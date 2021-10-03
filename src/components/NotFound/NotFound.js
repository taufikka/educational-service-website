import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='bg-danger text-white text-center fw-bold notFound'>
            <h1>404</h1>
            <h3>PAGE NOT FOUND</h3>
        </div>
    );
};

export default NotFound;